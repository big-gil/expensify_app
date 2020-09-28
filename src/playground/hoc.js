// Higher Order Component - A component that renders another component
import React from "react";
import ReactDOM from "react-dom";

console.log("Running HOC file.");

const Info = props => (
  <div>
    <h1>Info Title</h1>
    <p>This is the paragraph. {props.info}</p>
  </div>
);

const adminWithWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private information.</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const Authenticate = props => (
  <div>
    <h1>This is Authenticate.</h1>
  </div>
);

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>You are not logged in</p>
      )}
    </div>
  );
};

const AdminInfo = adminWithWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="This is the detail." />,
//   document.getElementById("info")
// );
ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="This is the detail." />,
  document.getElementById("info")
);
