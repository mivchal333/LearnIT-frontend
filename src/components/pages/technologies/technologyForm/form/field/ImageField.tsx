import React, {ChangeEvent, FocusEventHandler, useState} from "react";
import {Card, CardMedia, createStyles, makeStyles} from "@material-ui/core";
import {Theme} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import {head} from "lodash-es";
import TechnologyRepository from "../../../../../../api/repository/technologies.repository";
import {errorFlag} from "../../../../../../service/flag.service";
import {useDispatch} from "../../../../../../store/store";
import {FileUploadedMessage} from "../../../../../../api/model/fileUploadedMessage.model";
import {UploadedFile} from "../../../../../../api/model/uploadedFile.model";
import {EMPTY_IMAGE_PATH, getStaticImageUrl} from "../../../../../../service/staticProvider";
import {addFlag} from "../../../../../../store/shared/page/page.slice";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        imageCard: {
            marginRight: theme.spacing(6),
            width: '200px',
            height: '200px',
        },
        cardMedia: {
            width: '200px',
            height: '200px',
        },
        input: {
            display: 'none',
        },
        uploadDimmer: {
            backgroundColor: 'rgb(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '200px',
        }
    }),
);

interface PropsType {
    value?: UploadedFile,
    onChange: (file: UploadedFile) => void,
    onBlur: FocusEventHandler<HTMLInputElement>,
}

const ImageField = (props: PropsType) => {
    const dispatch = useDispatch()
    const classes = useStyles();
    const [showButton, setShowButton] = useState(false)

    const onFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const {files = []} = event.target
        const file = head(files);
        if (file) {
            try {
                const uploadedFile = await uploadFile(file)
                props.onChange(uploadedFile)
            } catch (e) {
                dispatch(addFlag(errorFlag("Error occurred while uploading")))
            }
        }
    };

    const uploadFile = async (file: File): Promise<FileUploadedMessage> => {
        const formData = new FormData();
        formData.append("file", file)
        const {data} = await TechnologyRepository.uploadImageFile(formData)
        return data
    }

    const imageUrl = props.value?.fileUrl || getStaticImageUrl(EMPTY_IMAGE_PATH)

    return (
        <Card
            className={classes.imageCard}
            onMouseEnter={() => setShowButton(true)}
            onMouseLeave={() => setShowButton(false)}
        >
            <CardMedia
                className={classes.cardMedia}
                image={imageUrl}
            >
                {showButton && (
                    <div className={classes.uploadDimmer}>
                        <input
                            id="avatar-file-input"
                            name="image"
                            accept="image/*"
                            className={classes.input}
                            type="file"
                            onChange={onFileChange}
                            onBlur={props.onBlur}
                        />
                        <label htmlFor="avatar-file-input">
                            <IconButton color="secondary" aria-label="upload picture" component="span" size="medium">
                                <PhotoCamera/>
                            </IconButton>
                        </label>
                    </div>
                )}
            </CardMedia>
        </Card>
    )
}
export default ImageField