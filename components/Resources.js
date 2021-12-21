import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import meetings from '../data/meetings/meetings';

/*
use cards to add the meetings
*/

export default function Resources() {

  return (
    <div className="container my-5">
    <h1>Resources</h1>
    {meetings.map(meeting => {
      return(
        <div className="card my-3">
          <div className="card-body">
            <h5 className="card-title">
              <strong>{meeting["number"]}: {meeting["title"]}</strong>
            </h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {meeting["subtitle"]}
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">
              <i>{meeting["date"]}</i>
            </h6>
            <p classaName="card-text">
              {meeting["description"]}
            </p>
            <a className="card-link text-primary" href={meeting["link"]} target="_blank" rel="noopener noreferrer">
              slides!
            </a>
          </div>
        </div>
        )
    })}
    </div>
  );
}
