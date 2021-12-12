export default function Footer() {
  const date = new Date();

  return (
    <div className="container">
      <p className="text-center">&copy; {date.getFullYear()} StuyPy. All rights reserved.</p>
    </div>
  );
}
