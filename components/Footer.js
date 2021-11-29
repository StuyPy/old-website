export default function Footer() {
  const date = new Date();

  return (
    <div>
      <p>&copy; {date.getFullYear()} StuyPy. All rights reserved.</p>
    </div>
  );
}
