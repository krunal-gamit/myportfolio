import './Four3D.css'

function Four3D(){
    return(
        <div className="content3d">
            <div className="contain">
            <iframe src='https://my.spline.design/untitled-2d96300fdf92256f7e4599e28ac185e3/' frameborder='0' width='100%' height='100%'></iframe>
        </div>
            <div className='contentText'>
                <span id="textone">Guess this tool
                    <br></br></span>
                    <span id="midtext"> can you?</span> <br></br>
                <span id="texttwo">
                    (Drag to rotate, hover to spin)
                </span>
            </div>
        </div>
    );
}

export default Four3D;