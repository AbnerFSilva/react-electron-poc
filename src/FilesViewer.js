/* eslint-disable react/jsx-no-undef */
export const FilesViewer = ({ files, onBack, onOpen }) => (
  <table className="table table-sm table-striped">
    <tbody>
      <tr className="clickable" onClick={onBack}>
        <td className="icon-row">
          <IconFolderOpen />
        </td>
        <td>...</td>
        <td></td>
      </tr>
      {files.map(({ name, directory, size }) => {
        return (
          <tr classname="clickable" onClick={() => directory && onOpen(name)}>
            <td className="icon-row">
              {directory ? <IconFolder /> : <IconFile />}
            </td>
            <td>{name}</td>
            <td>
              <span classname="float-end">{size}</span>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);
