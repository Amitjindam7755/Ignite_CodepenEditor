import React from 'react'
import CodeMirror from '@uiw/react-codemirror';
// import { javascript } from '@codemirror/lang-javascript';
import { tags as t } from '@lezer/highlight';
import { draculaInit } from '@uiw/codemirror-theme-dracula';
import { loadLanguage} from '@uiw/codemirror-extensions-langs';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { updateCodeValue } from '@/redux/slices/compilerSlice';
// import { updateCSS, updateHTML, updateJS } from '@/redux/slices/compilerSlice';

export default function CodeEditor() {
    const currentLanguage = useSelector((state:RootState) => state.compilerSlice.currentLanguage);
    // const htmlcode =useSelector((state:RootState)=>state.compilerSlice.html);
    // const csscode =useSelector((state:RootState)=>state.compilerSlice.css);
    // const javascriptcode =useSelector((state:RootState)=>state.compilerSlice.javascript);
    
    const fullCode = useSelector((state:RootState)=> state.compilerSlice.fullCode);
    const dispatch = useDispatch();
    // console.log('langNames:', langNames); 
    // const [value, setValue] = React.useState("console.log('hello world!');");
    const onChange = React.useCallback((value:string) => {
      // console.log('val:', typeof val);
      // setValue(val);
      // if(currentLanguage==="html"){
        // dispatch(updateHTML(value))
      // }
      // else if(currentLanguage==="css"){
        // dispatch(updateCSS(value))
      // }
      // else if(currentLanguage==="javascript"){
        // dispatch(updateJS(value))
      // }
      dispatch(updateCodeValue(value));
    }, []);
  return (
    <CodeMirror value={fullCode[currentLanguage]} height="calc(100vh - 60px - 50px)"
    className="code-editor"
     extensions={[loadLanguage(currentLanguage)!
    ]}
    onChange={onChange}
    theme={draculaInit({
        settings: {
          caret: '#c6c6c6',
          fontFamily: 'monospace',
        },
        styles: [
          { tag: t.comment, color: '#6272a4' },
        ]
      })} 
    />
  );
}
