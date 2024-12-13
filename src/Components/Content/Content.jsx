import { ListNested } from "react-bootstrap-icons";
import { list, text } from "../../Utils/Constant/Content";
import "./Content.css";

const Content = () => {
  return (
    <div className="contentWrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {text.map((value, index) => {
              const { mains, para, para2, para3 } = value;
              return (
                <div key={index}>
                  <div className="heading">
                    <h1>{mains}</h1>
                  </div>

                  <div className="Text">
                    <p>{para}</p>
                  </div>

                  <div className="Text">
                    <p>{para2}</p>
                  </div>

                  <div className="Text">
                    {para3 === true ? <p>{para3}</p> : null}
                  </div>
                </div>
              );
            })}

            <div className="heading">
              <h1>Most Common Screen Resolutions in Current Year:</h1>
            </div>

            {list.map((value, index) => {
              const { para } = value;
              return (
                <div key={index} className="Per">
                  <p>
                    <ListNested /> {para}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
