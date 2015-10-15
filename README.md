##PTALA website  
>PTALA website code recovered from GoDaddy.com  

##Goals:  
> 1. Remove the tags from the Gallery page.  
> 2. Fix the issue where images, videos and logos do not render.  

> To resolve goal 2, added an .htaccess file to the website root folder.   
> The .htaccess file has the mime type specified for svg files.  
> No need to restart the website after adding the .htaccess file. The change takes effect immediately.  
> To test, simply clear the browser cache on the client machine from which you are testing.


###Design decision to use SVG format for client logo images  
> Images in SVG format are used for the client logos  
> Using SVG format makes most sense (i.e. lightweight image files and easiest to prepare the image files) for the PTALA use case  
> (PTALA use case is to show grayscale logo on hover/mouseover and the full color logo on mouseout)  
> So essentially 2 images per client logo are required - one grayscale and one in full color.  

####Method for logo preparation:  
> Get the original image supplied by client.  
> Upload the image to vectormagic.com and transform it to SVG format.  
> Open the SVG file in Sketch3.  
> Scale the image down to an appropriate size to fit on the Client page along with all the other logos.  
> Export the scaled down image as SVG.  
> Copy the resulting SVG to img/client-logos folder in the repo.  
> We need two copies of the SVG, named as <clientname>_default.svg and <clientname>_hover.svg where <clientname> must be replaced with the actual client name in lowercase, no spaces or underscores in the <clientname>  
> For example, qualcomm_default.svg and qualcomm_hover.svg  
> Edit the <clientname>_default.svg file to make the image grayscale.  
> To make the image grayscale, replace the fill statements with  fill="#F3F1EF" except where fill="#FFFFFF"  

> http://www.imagemagick.org/Usage/draw/#svg  

