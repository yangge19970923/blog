import react, {Component} from "react"
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

import "./index.less"
import "./edit.less"

export default class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'value':'',
            title: ''
        };
        this.editor=null;
    }

    handleChange () {
        let {value}=this.state;
        value = this.editor.root.innerHTML;
        this.setState({value});
    }

    componentDidMount() {
        const textbox = this.refs.textarea;
        
        const options = {
            debug: 'warn',
            imageResize: {
                displayStyles: {
                  backgroundColor: 'black',
                  border: 'none',
                  color: 'white'
                }
            },
            modules: {
                toolbar: {
                    container:[
                        ["bold", "italic", "underline", "strike"], //加粗，斜体，下划线，删除线
                        ["blockquote", "code-block"], //引用，代码块
                        [{ header: 1 }, { header: 2 }], // 标题，键值对的形式；1、2表示字体大小
                        [{ list: "ordered" }, { list: "bullet" }], //列表
                        [{ script: "sub" }, { script: "super" }], // 上下标
                        [{ indent: "-1" }, { indent: "+1" }], // 缩进
                        [{ direction: "rtl" }], // 文本方向
                        [{ size: ["small", false, "large", "huge"] }], // 字体大小
                        [{ header: [1, 2, 3, 4, 5, 6, false] }], //几级标题
                        [{ color: [] }, { background: [] }], // 字体颜色，字体背景颜色
                        [{ font: [] }], //字体
                        [{ align: [] }], //对齐方式
                        ["clean"], //清除字体样式
                        ["image"/* ,"video" */], //上传图片、上传视频
                    ]
                },
            },
            placeholder: '请输入文本...',
            readOnly: false,
            theme: 'snow',
            ImageDrop: true,
        };
        const editor =this.editor= new Quill(textbox,options);
        const {value}=this.state;
        if (value) editor.clipboard.dangerouslyPasteHTML(value);
        editor.on('text-change', this.handleChange.bind(this));
    }
    render() {
        return (
            <div className="edit">
                <div className="edit-submit">
                    <label htmlFor="edit-title" className="edit-title">
                        <input type="text" id="edit-title" defaultValue={this.state.title} placeholder="请输入标题"/>
                    </label>
                    <span>发布文章</span>
                    <span>回到首页</span>
                </div>
                <div ref="textarea"></div>
            </div>
        )
    }
}