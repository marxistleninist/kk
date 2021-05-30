import React, {useState} from 'react'
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton'
import {CopyToClipboard} from 'react-copy-to-clipboard'

import DP from './profile_picture'
import './post.css'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {makeStyles} from '@material-ui/core/styles';
import data from './data'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function sendMessage(reaction, url) {
  var request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/848527163773681664/0THfNtXB_DXWIj5HgNLdUGoRxr6iEqVgjpC-E51yujAhDTRKeRNQ6YSS74aP9Ybe_rYY");

  request.setRequestHeader('Content-type', 'application/json');

  var params = {
    username: "reaction",
    avatar_url: "",
    content: `user gave ${reaction} to ${url}`
  }

  request.send(JSON.stringify(params));
}
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));
function Post() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [current, setCurrent] = useState(1);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const category = {
    quote: 'उद्धरण',
    historical: 'ऐतिहासिक ',
    comment: 'टिप्पणी ',
    thought: 'विचार',
  }
  const [copied, setCopied] = useState(true)
  return (
    <div className="container">
      <div className="top_bar">
        <div className="profile_picture">
          <img src={DP} alt="profile_picture" className="picture" />
        </div>
        <div className="details">
          <div className="name">
            Kavita Krishnapallavi
          </div>
          <div className="date">
            {data.data[current].date}
          </div>

        </div>
        <div className="copy">
          <CopyToClipboard text={data.data[current].content}
            onCopy={handleClick}>
            <IconButton>
              <FileCopyIcon />
            </IconButton>

          </CopyToClipboard>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
            <Alert onClose={handleClose} severity="success">
              Content copied to clipboard!
        </Alert>
          </Snackbar>
        </div>
      </div>
      <div className="content">
        <div className="categories">{data.data[current].category.split(',').map((cat) => (<div className="category">{category[`${cat}`]}</div>))}</div>
        {data.data[current].content}
      </div>
      <div className="bottom">
        <div className="reactions">
          <div className="reaction" onClick={() => sendMessage('👍', data.data[current].link)}>👍</div>
          <div className="reaction" onClick={() => sendMessage('👎', data.data[current].link)}>👎</div>
          <div className="reaction" onClick={() => sendMessage('❤', data.data[current].link)}>❤</div>
          <div className="reaction" onClick={() => sendMessage('🤔', data.data[current].link)}>🤔</div>
        </div>
        <div className="navigation">
          <IconButton onClick={() => current > 0 ? setCurrent(current - 1) : false}>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton onClick={() => setCurrent(Math.floor(Math.random() * data.data.length))}>
            <ShuffleIcon />
          </IconButton>
          <IconButton onClick={() => current < data.data.length - 1 ? setCurrent(current + 1) : false}>
            <ChevronRightIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Post
