import "./style.css";

const Section = ({title, body, extraHeaderContent}) => (
    <section>
        <div>
            <div class="section__container section__container--taskList">
                <h2> {title} </h2>
                {extraHeaderContent}
            </div>
            <div className="section__container section__container--list">
                {body}
            </div>
        </div>
    </section>
);

export default Section;
