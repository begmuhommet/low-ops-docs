import { FC } from "react";

type TProps = {
  title: string;
  content: string;
  link?: string;
  hideDivider?: boolean;
};

const MyCard: FC<TProps> = (props) => {
  const { title, content, link, hideDivider = false } = props;

  const renderContent = () => {
    return (
      <>
        <div className="card__header">
          <h3>{title}</h3>
        </div>
        {!link && <hr className="hr margin-left--md margin-right--md" />}
        <div className="card__body">{content}</div>
      </>
    );
  };

  if (link) {
    return (
      <a href={link} className="card h-full border card-link">
        {renderContent()}
      </a>
    );
  }

  return <div className="card h-full border">{renderContent()}</div>;
};

export default MyCard;
