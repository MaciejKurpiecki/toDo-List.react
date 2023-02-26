import { StyledContainerHeader, StyledContainerContent } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <section>
        <div>
            <StyledContainerHeader>
                <h2> {title} </h2>
                {extraHeaderContent}
            </StyledContainerHeader>
            <StyledContainerContent>
                {body}
            </StyledContainerContent>
        </div>
    </section>
);

export default Section;
