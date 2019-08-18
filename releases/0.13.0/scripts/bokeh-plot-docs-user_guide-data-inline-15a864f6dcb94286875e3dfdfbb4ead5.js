(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("c4b83fe2-0e91-4b54-ba7f-eef60049f931");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c4b83fe2-0e91-4b54-ba7f-eef60049f931' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"edd108c1-14f3-4f50-8d19-771064b4c7db":{"roots":{"references":[{"attributes":{},"id":"be865a2f-7a63-41d9-a18d-ef9957335de1","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Setosa only"},"id":"0ba74e99-44d5-4326-9cc8-daa8bb48aa86","type":"Title"},{"attributes":{"plot":{"id":"71138947-1b2b-407f-b1b3-9da1a1d3eff0","subtype":"Figure","type":"Plot"},"ticker":{"id":"bc356426-d674-4ded-88c5-aac427862407","type":"BasicTicker"}},"id":"a18dcd33-145e-40cf-9474-dd95782f25f1","type":"Grid"},{"attributes":{"children":[{"id":"bd6aa7e9-3607-46a9-9296-d9b3bc051327","type":"Row"}]},"id":"bba1f313-e762-4d77-b9e4-a7b750554ca9","type":"Column"},{"attributes":{},"id":"b4d3e4d6-e939-4a06-a20e-e03ed82ab035","type":"Selection"},{"attributes":{},"id":"4e2e881b-cd13-4294-b464-00d85d283553","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"607f6cd3-bfec-4074-a08e-591be9f552ab","type":"BoxSelectTool"},{"id":"fa6a562c-b61d-433c-8c38-be6a5645a527","type":"ResetTool"},{"id":"f739739b-0971-4740-a2ee-3a4db622f34c","type":"HelpTool"}]},"id":"e34130dd-d5db-4abe-91a2-d999577877a2","type":"Toolbar"},{"attributes":{},"id":"5e7114d1-6aa2-4104-a842-3d665ab9a5be","type":"UnionRenderers"},{"attributes":{},"id":"fb04ecda-02ac-40ba-bed8-f4ed12ede872","type":"BasicTicker"},{"attributes":{"formatter":{"id":"be865a2f-7a63-41d9-a18d-ef9957335de1","type":"BasicTickFormatter"},"plot":{"id":"342f15bf-661e-45d7-a7d9-e0f1f9519348","subtype":"Figure","type":"Plot"},"ticker":{"id":"fb04ecda-02ac-40ba-bed8-f4ed12ede872","type":"BasicTicker"}},"id":"c59982da-bdb3-44ab-8749-3a56c5ca9b92","type":"LinearAxis"},{"attributes":{"below":[{"id":"269b52bb-4432-4c21-b354-56834677935e","type":"LinearAxis"}],"left":[{"id":"25fb312e-107b-4adc-8ba1-af452723aedf","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"269b52bb-4432-4c21-b354-56834677935e","type":"LinearAxis"},{"id":"a18dcd33-145e-40cf-9474-dd95782f25f1","type":"Grid"},{"id":"25fb312e-107b-4adc-8ba1-af452723aedf","type":"LinearAxis"},{"id":"2208b78d-ebe2-4d54-8b87-47bc7904abe8","type":"Grid"},{"id":"2ee38689-3749-4f12-8c54-721a6695675e","type":"BoxAnnotation"},{"id":"0a88a264-15c7-40b6-b2a5-49908bdaaf2b","type":"GlyphRenderer"}],"title":{"id":"0ba74e99-44d5-4326-9cc8-daa8bb48aa86","type":"Title"},"toolbar":{"id":"e34130dd-d5db-4abe-91a2-d999577877a2","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"304bf7c1-44ab-44f7-8471-a6fb3a11e179","type":"DataRange1d"},"x_scale":{"id":"4dfdf1da-121b-4fed-8b6b-a4847a46d5bd","type":"LinearScale"},"y_range":{"id":"e8cb6c62-0377-44ee-a4ee-64d4778cfd4c","type":"DataRange1d"},"y_scale":{"id":"6b5d467b-d2de-48f6-8d0b-c93dc510a80a","type":"LinearScale"}},"id":"71138947-1b2b-407f-b1b3-9da1a1d3eff0","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"cd9840d7-b40f-4b0b-8d5a-061c6b05e3e2","type":"BasicTickFormatter"},"plot":{"id":"71138947-1b2b-407f-b1b3-9da1a1d3eff0","subtype":"Figure","type":"Plot"},"ticker":{"id":"f03737f4-4b82-4a9d-82a3-b9e902f6e499","type":"BasicTicker"}},"id":"25fb312e-107b-4adc-8ba1-af452723aedf","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"petal_length"},"y":{"field":"petal_width"}},"id":"36c41ae2-0a59-4283-aa21-6de45ef213f0","type":"Circle"},{"attributes":{"source":{"id":"40c02418-fa83-45c1-9d14-a0e9f442adbb","type":"ColumnDataSource"}},"id":"dd4410be-2a7e-4388-8bba-ef6490bd96cf","type":"CDSView"},{"attributes":{"callback":null,"overlay":{"id":"2ee38689-3749-4f12-8c54-721a6695675e","type":"BoxAnnotation"}},"id":"607f6cd3-bfec-4074-a08e-591be9f552ab","type":"BoxSelectTool"},{"attributes":{"plot":{"id":"342f15bf-661e-45d7-a7d9-e0f1f9519348","subtype":"Figure","type":"Plot"},"ticker":{"id":"590763b7-bf70-4fc8-88d7-bc0964d127a8","type":"BasicTicker"}},"id":"729af204-b579-49e1-b0d4-7c0aea7810f1","type":"Grid"},{"attributes":{"children":[{"id":"342f15bf-661e-45d7-a7d9-e0f1f9519348","subtype":"Figure","type":"Plot"},{"id":"71138947-1b2b-407f-b1b3-9da1a1d3eff0","subtype":"Figure","type":"Plot"}]},"id":"bd6aa7e9-3607-46a9-9296-d9b3bc051327","type":"Row"},{"attributes":{"data_source":{"id":"40c02418-fa83-45c1-9d14-a0e9f442adbb","type":"ColumnDataSource"},"glyph":{"id":"a5243ff5-2cee-4e4a-9a1f-664e08b4f480","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ffa588a6-bd52-41ab-af60-09faa8163af5","type":"Circle"},"selection_glyph":null,"view":{"id":"a4619112-2bd6-4ad0-9bd1-5522cedd600e","type":"CDSView"}},"id":"0a88a264-15c7-40b6-b2a5-49908bdaaf2b","type":"GlyphRenderer"},{"attributes":{},"id":"50805bf3-f0bd-433b-9278-1b8bf5c94b6a","type":"ResetTool"},{"attributes":{"children":[{"id":"326d1854-299f-4827-8884-df583dbbaa33","type":"ToolbarBox"},{"id":"bba1f313-e762-4d77-b9e4-a7b750554ca9","type":"Column"}]},"id":"3cbd385e-592e-45e4-88cf-d76ab0d0cfc2","type":"Column"},{"attributes":{"tools":[{"id":"de9a3f00-45db-45a0-80ca-33725e07d5b4","type":"BoxSelectTool"},{"id":"50805bf3-f0bd-433b-9278-1b8bf5c94b6a","type":"ResetTool"},{"id":"6934f086-f011-48ad-9cd1-ece2c04049fc","type":"HelpTool"},{"id":"607f6cd3-bfec-4074-a08e-591be9f552ab","type":"BoxSelectTool"},{"id":"fa6a562c-b61d-433c-8c38-be6a5645a527","type":"ResetTool"},{"id":"f739739b-0971-4740-a2ee-3a4db622f34c","type":"HelpTool"}]},"id":"095469a1-f841-47e5-b622-35b2906da92d","type":"ProxyToolbar"},{"attributes":{"below":[{"id":"abd52641-47d3-46b8-89c5-d89a9e22c15e","type":"LinearAxis"}],"left":[{"id":"c59982da-bdb3-44ab-8749-3a56c5ca9b92","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"abd52641-47d3-46b8-89c5-d89a9e22c15e","type":"LinearAxis"},{"id":"729af204-b579-49e1-b0d4-7c0aea7810f1","type":"Grid"},{"id":"c59982da-bdb3-44ab-8749-3a56c5ca9b92","type":"LinearAxis"},{"id":"fb409d86-31d0-4562-aac5-0ca85817d3ba","type":"Grid"},{"id":"69008f9e-eddc-4979-b50b-b319e4c29295","type":"BoxAnnotation"},{"id":"2e53b87a-a8a8-49fe-afd3-71864994681f","type":"GlyphRenderer"}],"title":{"id":"2bf850b0-1288-4118-9246-273b64f4ab64","type":"Title"},"toolbar":{"id":"aab990f3-7be4-4850-b756-cd08f88c3d06","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"304bf7c1-44ab-44f7-8471-a6fb3a11e179","type":"DataRange1d"},"x_scale":{"id":"e9c6cc13-faa9-4bb1-9e85-c435b83ed343","type":"LinearScale"},"y_range":{"id":"e8cb6c62-0377-44ee-a4ee-64d4778cfd4c","type":"DataRange1d"},"y_scale":{"id":"fed00e9a-b771-4733-a281-1639acd7dd09","type":"LinearScale"}},"id":"342f15bf-661e-45d7-a7d9-e0f1f9519348","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"color":["red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149],"petal_length":{"__ndarray__":"ZmZmZmZm9j9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D9mZmZmZmb2PzMzMzMzM/s/ZmZmZmZm9j8AAAAAAAD4P2ZmZmZmZvY/AAAAAAAA+D8AAAAAAAD4P5qZmZmZmfk/ZmZmZmZm9j+amZmZmZnxPzMzMzMzM/M/AAAAAAAA+D/NzMzMzMz0P2ZmZmZmZvY/MzMzMzMz+z8AAAAAAAD4PzMzMzMzM/s/AAAAAAAA+D8AAAAAAADwPzMzMzMzM/s/ZmZmZmZm/j+amZmZmZn5P5qZmZmZmfk/AAAAAAAA+D9mZmZmZmb2P5qZmZmZmfk/mpmZmZmZ+T8AAAAAAAD4PwAAAAAAAPg/ZmZmZmZm9j8AAAAAAAD4PzMzMzMzM/M/zczMzMzM9D9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D/NzMzMzMz0P83MzMzMzPQ/zczMzMzM9D+amZmZmZn5P2ZmZmZmZv4/ZmZmZmZm9j+amZmZmZn5P2ZmZmZmZvY/AAAAAAAA+D9mZmZmZmb2P83MzMzMzBJAAAAAAAAAEkCamZmZmZkTQAAAAAAAABBAZmZmZmZmEkAAAAAAAAASQM3MzMzMzBJAZmZmZmZmCkBmZmZmZmYSQDMzMzMzMw9AAAAAAAAADEDNzMzMzMwQQAAAAAAAABBAzczMzMzMEkDNzMzMzMwMQJqZmZmZmRFAAAAAAAAAEkBmZmZmZmYQQAAAAAAAABJAMzMzMzMzD0AzMzMzMzMTQAAAAAAAABBAmpmZmZmZE0DNzMzMzMwSQDMzMzMzMxFAmpmZmZmZEUAzMzMzMzMTQAAAAAAAABRAAAAAAAAAEkAAAAAAAAAMQGZmZmZmZg5AmpmZmZmZDUAzMzMzMzMPQGZmZmZmZhRAAAAAAAAAEkAAAAAAAAASQM3MzMzMzBJAmpmZmZmZEUBmZmZmZmYQQAAAAAAAABBAmpmZmZmZEUBmZmZmZmYSQAAAAAAAABBAZmZmZmZmCkDNzMzMzMwQQM3MzMzMzBBAzczMzMzMEEAzMzMzMzMRQAAAAAAAAAhAZmZmZmZmEEAAAAAAAAAYQGZmZmZmZhRAmpmZmZmZF0BmZmZmZmYWQDMzMzMzMxdAZmZmZmZmGkAAAAAAAAASQDMzMzMzMxlAMzMzMzMzF0BmZmZmZmYYQGZmZmZmZhRAMzMzMzMzFUAAAAAAAAAWQAAAAAAAABRAZmZmZmZmFEAzMzMzMzMVQAAAAAAAABZAzczMzMzMGkCamZmZmZkbQAAAAAAAABRAzczMzMzMFkCamZmZmZkTQM3MzMzMzBpAmpmZmZmZE0DNzMzMzMwWQAAAAAAAABhAMzMzMzMzE0CamZmZmZkTQGZmZmZmZhZAMzMzMzMzF0BmZmZmZmYYQJqZmZmZmRlAZmZmZmZmFkBmZmZmZmYUQGZmZmZmZhZAZmZmZmZmGEBmZmZmZmYWQAAAAAAAABZAMzMzMzMzE0CamZmZmZkVQGZmZmZmZhZAZmZmZmZmFEBmZmZmZmYUQJqZmZmZmRdAzczMzMzMFkDNzMzMzMwUQAAAAAAAABRAzczMzMzMFECamZmZmZkVQGZmZmZmZhRA","dtype":"float64","shape":[150]},"petal_width":{"__ndarray__":"mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnJP5qZmZmZmdk/MzMzMzMz0z+amZmZmZnJP5qZmZmZmck/mpmZmZmZuT+amZmZmZnJP5qZmZmZmck/mpmZmZmZuT+amZmZmZm5P5qZmZmZmck/mpmZmZmZ2T+amZmZmZnZPzMzMzMzM9M/MzMzMzMz0z8zMzMzMzPTP5qZmZmZmck/mpmZmZmZ2T+amZmZmZnJPwAAAAAAAOA/mpmZmZmZyT+amZmZmZnJP5qZmZmZmdk/mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnZP5qZmZmZmbk/mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZm5P5qZmZmZmck/mpmZmZmZyT8zMzMzMzPTPzMzMzMzM9M/mpmZmZmZyT8zMzMzMzPjP5qZmZmZmdk/MzMzMzMz0z+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnJP2ZmZmZmZvY/AAAAAAAA+D8AAAAAAAD4P83MzMzMzPQ/AAAAAAAA+D/NzMzMzMz0P5qZmZmZmfk/AAAAAAAA8D/NzMzMzMz0P2ZmZmZmZvY/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAPA/ZmZmZmZm9j/NzMzMzMz0P2ZmZmZmZvY/AAAAAAAA+D8AAAAAAADwPwAAAAAAAPg/mpmZmZmZ8T/NzMzMzMz8P83MzMzMzPQ/AAAAAAAA+D8zMzMzMzPzP83MzMzMzPQ/ZmZmZmZm9j9mZmZmZmb2PzMzMzMzM/s/AAAAAAAA+D8AAAAAAADwP5qZmZmZmfE/AAAAAAAA8D8zMzMzMzPzP5qZmZmZmfk/AAAAAAAA+D+amZmZmZn5PwAAAAAAAPg/zczMzMzM9D/NzMzMzMz0P83MzMzMzPQ/MzMzMzMz8z9mZmZmZmb2PzMzMzMzM/M/AAAAAAAA8D/NzMzMzMz0PzMzMzMzM/M/zczMzMzM9D/NzMzMzMz0P5qZmZmZmfE/zczMzMzM9D8AAAAAAAAEQGZmZmZmZv4/zczMzMzMAEDNzMzMzMz8P5qZmZmZmQFAzczMzMzMAEAzMzMzMzP7P83MzMzMzPw/zczMzMzM/D8AAAAAAAAEQAAAAAAAAABAZmZmZmZm/j/NzMzMzMwAQAAAAAAAAABAMzMzMzMzA0BmZmZmZmYCQM3MzMzMzPw/mpmZmZmZAUBmZmZmZmYCQAAAAAAAAPg/ZmZmZmZmAkAAAAAAAAAAQAAAAAAAAABAzczMzMzM/D/NzMzMzMwAQM3MzMzMzPw/zczMzMzM/D/NzMzMzMz8P83MzMzMzABAmpmZmZmZ+T9mZmZmZmb+PwAAAAAAAABAmpmZmZmZAUAAAAAAAAD4P2ZmZmZmZvY/ZmZmZmZmAkAzMzMzMzMDQM3MzMzMzPw/zczMzMzM/D/NzMzMzMwAQDMzMzMzMwNAZmZmZmZmAkBmZmZmZmb+P2ZmZmZmZgJAAAAAAAAABEBmZmZmZmYCQGZmZmZmZv4/AAAAAAAAAEBmZmZmZmYCQM3MzMzMzPw/","dtype":"float64","shape":[150]},"sepal_length":{"__ndarray__":"ZmZmZmZmFECamZmZmZkTQM3MzMzMzBJAZmZmZmZmEkAAAAAAAAAUQJqZmZmZmRVAZmZmZmZmEkAAAAAAAAAUQJqZmZmZmRFAmpmZmZmZE0CamZmZmZkVQDMzMzMzMxNAMzMzMzMzE0AzMzMzMzMRQDMzMzMzMxdAzczMzMzMFkCamZmZmZkVQGZmZmZmZhRAzczMzMzMFkBmZmZmZmYUQJqZmZmZmRVAZmZmZmZmFEBmZmZmZmYSQGZmZmZmZhRAMzMzMzMzE0AAAAAAAAAUQAAAAAAAABRAzczMzMzMFEDNzMzMzMwUQM3MzMzMzBJAMzMzMzMzE0CamZmZmZkVQM3MzMzMzBRAAAAAAAAAFkCamZmZmZkTQAAAAAAAABRAAAAAAAAAFkCamZmZmZkTQJqZmZmZmRFAZmZmZmZmFEAAAAAAAAAUQAAAAAAAABJAmpmZmZmZEUAAAAAAAAAUQGZmZmZmZhRAMzMzMzMzE0BmZmZmZmYUQGZmZmZmZhJAMzMzMzMzFUAAAAAAAAAUQAAAAAAAABxAmpmZmZmZGUCamZmZmZkbQAAAAAAAABZAAAAAAAAAGkDNzMzMzMwWQDMzMzMzMxlAmpmZmZmZE0BmZmZmZmYaQM3MzMzMzBRAAAAAAAAAFECamZmZmZkXQAAAAAAAABhAZmZmZmZmGEBmZmZmZmYWQM3MzMzMzBpAZmZmZmZmFkAzMzMzMzMXQM3MzMzMzBhAZmZmZmZmFkCamZmZmZkXQGZmZmZmZhhAMzMzMzMzGUBmZmZmZmYYQJqZmZmZmRlAZmZmZmZmGkAzMzMzMzMbQM3MzMzMzBpAAAAAAAAAGEDNzMzMzMwWQAAAAAAAABZAAAAAAAAAFkAzMzMzMzMXQAAAAAAAABhAmpmZmZmZFUAAAAAAAAAYQM3MzMzMzBpAMzMzMzMzGUBmZmZmZmYWQAAAAAAAABZAAAAAAAAAFkBmZmZmZmYYQDMzMzMzMxdAAAAAAAAAFEBmZmZmZmYWQM3MzMzMzBZAzczMzMzMFkDNzMzMzMwYQGZmZmZmZhRAzczMzMzMFkAzMzMzMzMZQDMzMzMzMxdAZmZmZmZmHEAzMzMzMzMZQAAAAAAAABpAZmZmZmZmHkCamZmZmZkTQDMzMzMzMx1AzczMzMzMGkDNzMzMzMwcQAAAAAAAABpAmpmZmZmZGUAzMzMzMzMbQM3MzMzMzBZAMzMzMzMzF0CamZmZmZkZQAAAAAAAABpAzczMzMzMHkDNzMzMzMweQAAAAAAAABhAmpmZmZmZG0BmZmZmZmYWQM3MzMzMzB5AMzMzMzMzGUDNzMzMzMwaQM3MzMzMzBxAzczMzMzMGEBmZmZmZmYYQJqZmZmZmRlAzczMzMzMHECamZmZmZkdQJqZmZmZmR9AmpmZmZmZGUAzMzMzMzMZQGZmZmZmZhhAzczMzMzMHkAzMzMzMzMZQJqZmZmZmRlAAAAAAAAAGECamZmZmZkbQM3MzMzMzBpAmpmZmZmZG0AzMzMzMzMXQDMzMzMzMxtAzczMzMzMGkDNzMzMzMwaQDMzMzMzMxlAAAAAAAAAGkDNzMzMzMwYQJqZmZmZmRdA","dtype":"float64","shape":[150]},"sepal_width":{"__ndarray__":"AAAAAAAADEAAAAAAAAAIQJqZmZmZmQlAzczMzMzMCEDNzMzMzMwMQDMzMzMzMw9AMzMzMzMzC0AzMzMzMzMLQDMzMzMzMwdAzczMzMzMCECamZmZmZkNQDMzMzMzMwtAAAAAAAAACEAAAAAAAAAIQAAAAAAAABBAmpmZmZmZEUAzMzMzMzMPQAAAAAAAAAxAZmZmZmZmDkBmZmZmZmYOQDMzMzMzMwtAmpmZmZmZDUDNzMzMzMwMQGZmZmZmZgpAMzMzMzMzC0AAAAAAAAAIQDMzMzMzMwtAAAAAAAAADEAzMzMzMzMLQJqZmZmZmQlAzczMzMzMCEAzMzMzMzMLQGZmZmZmZhBAzczMzMzMEEDNzMzMzMwIQJqZmZmZmQlAAAAAAAAADEDNzMzMzMwMQAAAAAAAAAhAMzMzMzMzC0AAAAAAAAAMQGZmZmZmZgJAmpmZmZmZCUAAAAAAAAAMQGZmZmZmZg5AAAAAAAAACEBmZmZmZmYOQJqZmZmZmQlAmpmZmZmZDUBmZmZmZmYKQJqZmZmZmQlAmpmZmZmZCUDNzMzMzMwIQGZmZmZmZgJAZmZmZmZmBkBmZmZmZmYGQGZmZmZmZgpAMzMzMzMzA0AzMzMzMzMHQJqZmZmZmQVAAAAAAAAAAEAAAAAAAAAIQJqZmZmZmQFAMzMzMzMzB0AzMzMzMzMHQM3MzMzMzAhAAAAAAAAACECamZmZmZkFQJqZmZmZmQFAAAAAAAAABECamZmZmZkJQGZmZmZmZgZAAAAAAAAABEBmZmZmZmYGQDMzMzMzMwdAAAAAAAAACEBmZmZmZmYGQAAAAAAAAAhAMzMzMzMzB0DNzMzMzMwEQDMzMzMzMwNAMzMzMzMzA0CamZmZmZkFQJqZmZmZmQVAAAAAAAAACEAzMzMzMzMLQM3MzMzMzAhAZmZmZmZmAkAAAAAAAAAIQAAAAAAAAARAzczMzMzMBEAAAAAAAAAIQM3MzMzMzARAZmZmZmZmAkCamZmZmZkFQAAAAAAAAAhAMzMzMzMzB0AzMzMzMzMHQAAAAAAAAARAZmZmZmZmBkBmZmZmZmYKQJqZmZmZmQVAAAAAAAAACEAzMzMzMzMHQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAEQDMzMzMzMwdAAAAAAAAABEDNzMzMzMwMQJqZmZmZmQlAmpmZmZmZBUAAAAAAAAAIQAAAAAAAAARAZmZmZmZmBkCamZmZmZkJQAAAAAAAAAhAZmZmZmZmDkDNzMzMzMwEQJqZmZmZmQFAmpmZmZmZCUBmZmZmZmYGQGZmZmZmZgZAmpmZmZmZBUBmZmZmZmYKQJqZmZmZmQlAZmZmZmZmBkAAAAAAAAAIQGZmZmZmZgZAAAAAAAAACEBmZmZmZmYGQGZmZmZmZg5AZmZmZmZmBkBmZmZmZmYGQM3MzMzMzARAAAAAAAAACEAzMzMzMzMLQM3MzMzMzAhAAAAAAAAACEDNzMzMzMwIQM3MzMzMzAhAzczMzMzMCECamZmZmZkFQJqZmZmZmQlAZmZmZmZmCkAAAAAAAAAIQAAAAAAAAARAAAAAAAAACEAzMzMzMzMLQAAAAAAAAAhA","dtype":"float64","shape":[150]},"species":["setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica"]},"selected":{"id":"b4d3e4d6-e939-4a06-a20e-e03ed82ab035","type":"Selection"},"selection_policy":{"id":"5e7114d1-6aa2-4104-a842-3d665ab9a5be","type":"UnionRenderers"}},"id":"40c02418-fa83-45c1-9d14-a0e9f442adbb","type":"ColumnDataSource"},{"attributes":{},"id":"bc356426-d674-4ded-88c5-aac427862407","type":"BasicTicker"},{"attributes":{},"id":"590763b7-bf70-4fc8-88d7-bc0964d127a8","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"petal_length"},"y":{"field":"petal_width"}},"id":"ffa588a6-bd52-41ab-af60-09faa8163af5","type":"Circle"},{"attributes":{},"id":"e9c6cc13-faa9-4bb1-9e85-c435b83ed343","type":"LinearScale"},{"attributes":{},"id":"f03737f4-4b82-4a9d-82a3-b9e902f6e499","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"de9a3f00-45db-45a0-80ca-33725e07d5b4","type":"BoxSelectTool"},{"id":"50805bf3-f0bd-433b-9278-1b8bf5c94b6a","type":"ResetTool"},{"id":"6934f086-f011-48ad-9cd1-ece2c04049fc","type":"HelpTool"}]},"id":"aab990f3-7be4-4850-b756-cd08f88c3d06","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"342f15bf-661e-45d7-a7d9-e0f1f9519348","subtype":"Figure","type":"Plot"},"ticker":{"id":"fb04ecda-02ac-40ba-bed8-f4ed12ede872","type":"BasicTicker"}},"id":"fb409d86-31d0-4562-aac5-0ca85817d3ba","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"71138947-1b2b-407f-b1b3-9da1a1d3eff0","subtype":"Figure","type":"Plot"},"ticker":{"id":"f03737f4-4b82-4a9d-82a3-b9e902f6e499","type":"BasicTicker"}},"id":"2208b78d-ebe2-4d54-8b87-47bc7904abe8","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"69008f9e-eddc-4979-b50b-b319e4c29295","type":"BoxAnnotation"},{"attributes":{"filters":[{"id":"bed65230-c39e-41e9-8cbd-563d38c24786","type":"GroupFilter"}],"source":{"id":"40c02418-fa83-45c1-9d14-a0e9f442adbb","type":"ColumnDataSource"}},"id":"a4619112-2bd6-4ad0-9bd1-5522cedd600e","type":"CDSView"},{"attributes":{"fill_color":{"value":"black"},"x":{"field":"petal_length"},"y":{"field":"petal_width"}},"id":"0cf7d04a-b213-4ee3-8430-a447ed5da89c","type":"Circle"},{"attributes":{"formatter":{"id":"abc4c1ea-3e12-4e33-bd03-9ee7444fb4c7","type":"BasicTickFormatter"},"plot":{"id":"342f15bf-661e-45d7-a7d9-e0f1f9519348","subtype":"Figure","type":"Plot"},"ticker":{"id":"590763b7-bf70-4fc8-88d7-bc0964d127a8","type":"BasicTicker"}},"id":"abd52641-47d3-46b8-89c5-d89a9e22c15e","type":"LinearAxis"},{"attributes":{},"id":"cd9840d7-b40f-4b0b-8d5a-061c6b05e3e2","type":"BasicTickFormatter"},{"attributes":{},"id":"fed00e9a-b771-4733-a281-1639acd7dd09","type":"LinearScale"},{"attributes":{},"id":"abc4c1ea-3e12-4e33-bd03-9ee7444fb4c7","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Full data set"},"id":"2bf850b0-1288-4118-9246-273b64f4ab64","type":"Title"},{"attributes":{},"id":"f739739b-0971-4740-a2ee-3a4db622f34c","type":"HelpTool"},{"attributes":{"column_name":"species","group":"versicolor"},"id":"bed65230-c39e-41e9-8cbd-563d38c24786","type":"GroupFilter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2ee38689-3749-4f12-8c54-721a6695675e","type":"BoxAnnotation"},{"attributes":{},"id":"6934f086-f011-48ad-9cd1-ece2c04049fc","type":"HelpTool"},{"attributes":{"toolbar":{"id":"095469a1-f841-47e5-b622-35b2906da92d","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"326d1854-299f-4827-8884-df583dbbaa33","type":"ToolbarBox"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"field":"petal_length"},"y":{"field":"petal_width"}},"id":"a5243ff5-2cee-4e4a-9a1f-664e08b4f480","type":"Circle"},{"attributes":{},"id":"6b5d467b-d2de-48f6-8d0b-c93dc510a80a","type":"LinearScale"},{"attributes":{},"id":"fa6a562c-b61d-433c-8c38-be6a5645a527","type":"ResetTool"},{"attributes":{"formatter":{"id":"4e2e881b-cd13-4294-b464-00d85d283553","type":"BasicTickFormatter"},"plot":{"id":"71138947-1b2b-407f-b1b3-9da1a1d3eff0","subtype":"Figure","type":"Plot"},"ticker":{"id":"bc356426-d674-4ded-88c5-aac427862407","type":"BasicTicker"}},"id":"269b52bb-4432-4c21-b354-56834677935e","type":"LinearAxis"},{"attributes":{"callback":null},"id":"304bf7c1-44ab-44f7-8471-a6fb3a11e179","type":"DataRange1d"},{"attributes":{"data_source":{"id":"40c02418-fa83-45c1-9d14-a0e9f442adbb","type":"ColumnDataSource"},"glyph":{"id":"0cf7d04a-b213-4ee3-8430-a447ed5da89c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"36c41ae2-0a59-4283-aa21-6de45ef213f0","type":"Circle"},"selection_glyph":null,"view":{"id":"dd4410be-2a7e-4388-8bba-ef6490bd96cf","type":"CDSView"}},"id":"2e53b87a-a8a8-49fe-afd3-71864994681f","type":"GlyphRenderer"},{"attributes":{"callback":null,"overlay":{"id":"69008f9e-eddc-4979-b50b-b319e4c29295","type":"BoxAnnotation"}},"id":"de9a3f00-45db-45a0-80ca-33725e07d5b4","type":"BoxSelectTool"},{"attributes":{},"id":"4dfdf1da-121b-4fed-8b6b-a4847a46d5bd","type":"LinearScale"},{"attributes":{"callback":null},"id":"e8cb6c62-0377-44ee-a4ee-64d4778cfd4c","type":"DataRange1d"}],"root_ids":["3cbd385e-592e-45e4-88cf-d76ab0d0cfc2"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"edd108c1-14f3-4f50-8d19-771064b4c7db","roots":{"3cbd385e-592e-45e4-88cf-d76ab0d0cfc2":"c4b83fe2-0e91-4b54-ba7f-eef60049f931"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();