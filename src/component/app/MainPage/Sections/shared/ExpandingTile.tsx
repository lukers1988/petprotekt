import { ReactNode, useState } from "react";
import {
    Container,
    Divider,
    ExpandedContentWrapper,
    FoldedContent,
    IconContainer,
    ToggleContainer,
} from "./styles";
import { RowLayout } from "@appComponents/styled/sharedStyles";
import { InfoHeader } from "@appComponents/common/Typography";
import { IconInterface, MinusIcon, PlusIcon } from "@appComponents/Icons";
import { info } from "@appConst/colors";

interface ExpandingTileInterface {
    children: ReactNode;
    label: string;
    icon: ReactNode;
    color: string;
}

const ExpandingTile = ({
    children,
    label,
    icon,
    color,
}: ExpandingTileInterface) => {
    const [contentExpanded, setContentExpanded] = useState(false);

    const ToggleIcon = (props: IconInterface) => {
        return contentExpanded ? (
            <MinusIcon {...props} />
        ) : (
            <PlusIcon {...props} />
        );
    };

    return (
        <Container>
            <FoldedContent>
                <RowLayout>
                    <IconContainer color={color}>{icon}</IconContainer>
                    <InfoHeader>{label}</InfoHeader>
                </RowLayout>
                <ToggleContainer
                    onClick={() => setContentExpanded((state) => !state)}
                >
                    <ToggleIcon color={info} />
                </ToggleContainer>
            </FoldedContent>
            {contentExpanded && (
                <ExpandedContentWrapper>
                    <Divider />
                    {children}
                </ExpandedContentWrapper>
            )}
        </Container>
    );
};

export default ExpandingTile;
