#ifdef GL_ES
precision mediump float;
#endif

#define TWO_PI 6.28318530718

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 circle ( float posX, float posY, float rad, vec3 color, float size){
    vec2 st = gl_FragCoord.xy/u_resolution;
    // st -=.5;
    st.x -=posX;
    st.y -=posY;
    float pct = 1. - length(st)*2.*rad;
    // rad = 1./rad;
    // pct = fract(pct*1.);
    pct = step(size,pct);

    color = vec3(pct)*color;
    
    return color;
}

void main(){
    
    vec3 color = vec3(0.0);
    vec3 color1 = vec3(.5,.8,.1);
    vec3 color2 = vec3(.9,.4,.4);
    vec3 color3 = vec3(.5,.8,.9);

    float factor = (sin(u_time*20.)*cos(u_time*6.)/299.)/5.;
    float s1 = .978+factor;

    vec3 c1 = circle( .45,.5,.1,color2,s1);
    vec3 c2 = circle( .55,.5,.1,color2,s1);
    vec3 c3 = circle( .5,.4,.1,color2,s1+.007);
    
    
    
    // c1 += circle( sin(u_time)/2.+.5, cos(u_time)/2.+.5,1.1);
    // c1 += circle( sin(u_time+5.)/2.+.5, cos(u_time+5.)/2.+.5,1.1);
    

    // color = vec3(c1);
    // color *= color1;
    // color = mix (c1,c2,1.c1;
    vec3 combine = c1+c2+c3-c3*c1-c3*c2-c1*c2+c1*c2*c3;
    // gl_FragColor = vec4(vec3(fract(combine*mod(u_time*2.,1.0))),1.0);
    gl_FragColor = vec4(vec3(fract(combine*mod(u_time,2.0))),1.0);
}





