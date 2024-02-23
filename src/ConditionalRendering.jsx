let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}

return <div>{content}</div>;

return <div>{isLoggedIn ? <AdminPanel /> : <LoginForm />}</div>;

return <div>{isLoggedIn && <AdminPanel />}</div>;
