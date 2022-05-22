import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  readFirestoreDocumentDataWithPathWithId,
  updateFirestoreItemNameWithPath,
} from "../../interfaces/FirestoreInterface";
import RenameProjectModal from "./modals/RenameProjectModal";
import useModalState from "./modals/useModalState";

const FileHeader = (props) => {
  const navigate = useNavigate();
  const docId = props.docID;
  const nameObj = useRef({ name: props.tempName });
  const [name, setName] = useState(props.tempName);

  const [renameModalOpen, handleRenameModalOpen, handleRenameModalClose] =
    useModalState(false);

  useEffect(() => {
    var docMetaDataFetched = false;
    onAuthStateChanged(auth, (user) => {
      if (!docMetaDataFetched) {
        readFirestoreDocumentDataWithPathWithId(`/projects`, docId)
          .then((doc) => {
            nameObj.current.name = doc.name;
            setName(doc.name);
          })
          .catch((error) => {
            console.error(error);
            // navigate("/404");
          });
      }
    });

    return () => {
      docMetaDataFetched = true;
    };
  }, []);

  function updateName(newName) {
    setName(newName);
    updateFirestoreItemNameWithPath(`/projects`, docId, newName);
  }

  return (
    <div className="flex w-full h-[5vh] bg-slate-200 justify-between items-center px-2">
      <div className="">
        <div className="text-lg">{name}</div>
      </div>
      <button
        className="border-2 border-purple-400 text-purple-400 rounded-lg p-1 mx-1"
        onClick={handleRenameModalOpen}
      >
        Rename
      </button>
      <RenameProjectModal
        modalOpen={renameModalOpen}
        handleClose={handleRenameModalClose}
        updateName={updateName}
        placeholderName={name}
      />
    </div>
  );
};

export default FileHeader;
