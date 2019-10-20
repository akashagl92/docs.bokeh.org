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
      };var element = document.getElementById("98050b8b-25cc-453a-8390-bc63f72f33d9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '98050b8b-25cc-453a-8390-bc63f72f33d9' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"5381880e-9d44-47e2-acf4-8d31c2701156":{"roots":{"references":[{"attributes":{},"id":"2d1e5a35-3122-47c4-a29c-e5608ef33fcd","type":"BasicTicker"},{"attributes":{"children":[{"id":"91681872-90fc-491a-972c-169ee6850cc5","type":"ToolbarBox"},{"id":"8ca3b064-ac74-46bc-88c2-753cbf187f83","type":"Column"}]},"id":"56d23dd6-bf84-4fa1-8369-2c38511136eb","type":"Column"},{"attributes":{},"id":"c3612fa9-729a-412c-822f-58ad49a83c16","type":"LinearScale"},{"attributes":{"plot":null,"text":"Setosa only"},"id":"ea169f48-1448-4352-8bca-910344bbcd6d","type":"Title"},{"attributes":{"callback":null,"overlay":{"id":"ad214db0-6b6a-4b0f-90c8-3d4aed2b1c50","type":"BoxAnnotation"},"renderers":[{"id":"38a4ce8b-2238-4fb2-baf1-98f60f5d5386","type":"GlyphRenderer"}]},"id":"23cd8acf-527e-4ced-896e-eea7df683f62","type":"BoxSelectTool"},{"attributes":{},"id":"f44e081d-7855-407a-8626-2c9ec68afd9e","type":"HelpTool"},{"attributes":{"sizing_mode":"scale_width","toolbar_location":"above","tools":[{"id":"62497d99-d8db-469e-8681-fcf3e52d40ff","type":"BoxSelectTool"},{"id":"0f3b9360-9dfd-4ca5-92a7-8547aa31424d","type":"ResetTool"},{"id":"78200913-7d4d-40df-960d-0f78ac113d8f","type":"HelpTool"},{"id":"23cd8acf-527e-4ced-896e-eea7df683f62","type":"BoxSelectTool"},{"id":"b3f292af-24e6-4af0-93ed-b38585b29cc3","type":"ResetTool"},{"id":"f44e081d-7855-407a-8626-2c9ec68afd9e","type":"HelpTool"}]},"id":"91681872-90fc-491a-972c-169ee6850cc5","type":"ToolbarBox"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"petal_length"},"y":{"field":"petal_width"}},"id":"ac325db9-2062-4689-8d9c-9efe87e63007","type":"Circle"},{"attributes":{},"id":"2a2b1863-0c34-4d6b-9416-0d438be19626","type":"BasicTicker"},{"attributes":{"callback":null,"overlay":{"id":"50653a0a-72f2-4ed5-8f1d-cd1821b9ea14","type":"BoxAnnotation"},"renderers":[{"id":"ffe6b4ed-b034-4f1b-bafd-8434732cc194","type":"GlyphRenderer"}]},"id":"62497d99-d8db-469e-8681-fcf3e52d40ff","type":"BoxSelectTool"},{"attributes":{},"id":"0f3b9360-9dfd-4ca5-92a7-8547aa31424d","type":"ResetTool"},{"attributes":{"plot":{"id":"2c14ae62-7f7d-4d2b-a405-4330ca3afef5","subtype":"Figure","type":"Plot"},"ticker":{"id":"d2b2cfae-d726-4ec2-b317-4182b655febe","type":"BasicTicker"}},"id":"61231e90-c529-41ca-ad7b-1bc41d0be027","type":"Grid"},{"attributes":{"filters":[{"id":"cc39999e-eac1-487a-860a-94d8b6e455ef","type":"GroupFilter"}],"source":{"id":"d94ef072-0a16-4d99-b767-b5b69e95c665","type":"ColumnDataSource"}},"id":"c159dd77-527c-4af1-945d-b0e74338e185","type":"CDSView"},{"attributes":{"data_source":{"id":"d94ef072-0a16-4d99-b767-b5b69e95c665","type":"ColumnDataSource"},"glyph":{"id":"960871a3-50a9-421c-9404-a8d54883ac3a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ac325db9-2062-4689-8d9c-9efe87e63007","type":"Circle"},"selection_glyph":null,"view":{"id":"3c1fc385-032d-417a-baa9-c3ad5bdd1a32","type":"CDSView"}},"id":"ffe6b4ed-b034-4f1b-bafd-8434732cc194","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"56e85678-6100-4b48-bad8-ebf3f7387b8a","type":"BasicTickFormatter"},"plot":{"id":"5bec049b-5d51-4918-8497-cf8903ab5f72","subtype":"Figure","type":"Plot"},"ticker":{"id":"2d1e5a35-3122-47c4-a29c-e5608ef33fcd","type":"BasicTicker"}},"id":"7ee51797-f22c-475f-a405-33d90a3f1361","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"62497d99-d8db-469e-8681-fcf3e52d40ff","type":"BoxSelectTool"},{"id":"0f3b9360-9dfd-4ca5-92a7-8547aa31424d","type":"ResetTool"},{"id":"78200913-7d4d-40df-960d-0f78ac113d8f","type":"HelpTool"}]},"id":"221a3a85-3d08-4b5e-929d-6204dd0df9ed","type":"Toolbar"},{"attributes":{"callback":null},"id":"d9be4400-a7c5-4d2d-aa38-88b96fde7484","type":"DataRange1d"},{"attributes":{},"id":"7c59ec65-a995-4b27-906a-dd50efe0aa90","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"e0a0caf6-abf2-4d3f-9264-befdff912998","type":"BasicTickFormatter"},"plot":{"id":"5bec049b-5d51-4918-8497-cf8903ab5f72","subtype":"Figure","type":"Plot"},"ticker":{"id":"adc110c1-02ca-4c1f-af8d-81fa3ea7da35","type":"BasicTicker"}},"id":"218c11bd-a18f-4c6f-b1af-69c55b12669a","type":"LinearAxis"},{"attributes":{"source":{"id":"d94ef072-0a16-4d99-b767-b5b69e95c665","type":"ColumnDataSource"}},"id":"3c1fc385-032d-417a-baa9-c3ad5bdd1a32","type":"CDSView"},{"attributes":{"callback":null,"column_names":["sepal_length","sepal_width","petal_length","petal_width","species","color","index"],"data":{"color":["red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149],"petal_length":{"__ndarray__":"ZmZmZmZm9j9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D9mZmZmZmb2PzMzMzMzM/s/ZmZmZmZm9j8AAAAAAAD4P2ZmZmZmZvY/AAAAAAAA+D8AAAAAAAD4P5qZmZmZmfk/ZmZmZmZm9j+amZmZmZnxPzMzMzMzM/M/AAAAAAAA+D/NzMzMzMz0P2ZmZmZmZvY/MzMzMzMz+z8AAAAAAAD4PzMzMzMzM/s/AAAAAAAA+D8AAAAAAADwPzMzMzMzM/s/ZmZmZmZm/j+amZmZmZn5P5qZmZmZmfk/AAAAAAAA+D9mZmZmZmb2P5qZmZmZmfk/mpmZmZmZ+T8AAAAAAAD4PwAAAAAAAPg/ZmZmZmZm9j8AAAAAAAD4PzMzMzMzM/M/zczMzMzM9D9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D/NzMzMzMz0P83MzMzMzPQ/zczMzMzM9D+amZmZmZn5P2ZmZmZmZv4/ZmZmZmZm9j+amZmZmZn5P2ZmZmZmZvY/AAAAAAAA+D9mZmZmZmb2P83MzMzMzBJAAAAAAAAAEkCamZmZmZkTQAAAAAAAABBAZmZmZmZmEkAAAAAAAAASQM3MzMzMzBJAZmZmZmZmCkBmZmZmZmYSQDMzMzMzMw9AAAAAAAAADEDNzMzMzMwQQAAAAAAAABBAzczMzMzMEkDNzMzMzMwMQJqZmZmZmRFAAAAAAAAAEkBmZmZmZmYQQAAAAAAAABJAMzMzMzMzD0AzMzMzMzMTQAAAAAAAABBAmpmZmZmZE0DNzMzMzMwSQDMzMzMzMxFAmpmZmZmZEUAzMzMzMzMTQAAAAAAAABRAAAAAAAAAEkAAAAAAAAAMQGZmZmZmZg5AmpmZmZmZDUAzMzMzMzMPQGZmZmZmZhRAAAAAAAAAEkAAAAAAAAASQM3MzMzMzBJAmpmZmZmZEUBmZmZmZmYQQAAAAAAAABBAmpmZmZmZEUBmZmZmZmYSQAAAAAAAABBAZmZmZmZmCkDNzMzMzMwQQM3MzMzMzBBAzczMzMzMEEAzMzMzMzMRQAAAAAAAAAhAZmZmZmZmEEAAAAAAAAAYQGZmZmZmZhRAmpmZmZmZF0BmZmZmZmYWQDMzMzMzMxdAZmZmZmZmGkAAAAAAAAASQDMzMzMzMxlAMzMzMzMzF0BmZmZmZmYYQGZmZmZmZhRAMzMzMzMzFUAAAAAAAAAWQAAAAAAAABRAZmZmZmZmFEAzMzMzMzMVQAAAAAAAABZAzczMzMzMGkCamZmZmZkbQAAAAAAAABRAzczMzMzMFkCamZmZmZkTQM3MzMzMzBpAmpmZmZmZE0DNzMzMzMwWQAAAAAAAABhAMzMzMzMzE0CamZmZmZkTQGZmZmZmZhZAMzMzMzMzF0BmZmZmZmYYQJqZmZmZmRlAZmZmZmZmFkBmZmZmZmYUQGZmZmZmZhZAZmZmZmZmGEBmZmZmZmYWQAAAAAAAABZAMzMzMzMzE0CamZmZmZkVQGZmZmZmZhZAZmZmZmZmFEBmZmZmZmYUQJqZmZmZmRdAzczMzMzMFkDNzMzMzMwUQAAAAAAAABRAzczMzMzMFECamZmZmZkVQGZmZmZmZhRA","dtype":"float64","shape":[150]},"petal_width":{"__ndarray__":"mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnJP5qZmZmZmdk/MzMzMzMz0z+amZmZmZnJP5qZmZmZmck/mpmZmZmZuT+amZmZmZnJP5qZmZmZmck/mpmZmZmZuT+amZmZmZm5P5qZmZmZmck/mpmZmZmZ2T+amZmZmZnZPzMzMzMzM9M/MzMzMzMz0z8zMzMzMzPTP5qZmZmZmck/mpmZmZmZ2T+amZmZmZnJPwAAAAAAAOA/mpmZmZmZyT+amZmZmZnJP5qZmZmZmdk/mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnZP5qZmZmZmbk/mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZm5P5qZmZmZmck/mpmZmZmZyT8zMzMzMzPTPzMzMzMzM9M/mpmZmZmZyT8zMzMzMzPjP5qZmZmZmdk/MzMzMzMz0z+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnJP2ZmZmZmZvY/AAAAAAAA+D8AAAAAAAD4P83MzMzMzPQ/AAAAAAAA+D/NzMzMzMz0P5qZmZmZmfk/AAAAAAAA8D/NzMzMzMz0P2ZmZmZmZvY/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAPA/ZmZmZmZm9j/NzMzMzMz0P2ZmZmZmZvY/AAAAAAAA+D8AAAAAAADwPwAAAAAAAPg/mpmZmZmZ8T/NzMzMzMz8P83MzMzMzPQ/AAAAAAAA+D8zMzMzMzPzP83MzMzMzPQ/ZmZmZmZm9j9mZmZmZmb2PzMzMzMzM/s/AAAAAAAA+D8AAAAAAADwP5qZmZmZmfE/AAAAAAAA8D8zMzMzMzPzP5qZmZmZmfk/AAAAAAAA+D+amZmZmZn5PwAAAAAAAPg/zczMzMzM9D/NzMzMzMz0P83MzMzMzPQ/MzMzMzMz8z9mZmZmZmb2PzMzMzMzM/M/AAAAAAAA8D/NzMzMzMz0PzMzMzMzM/M/zczMzMzM9D/NzMzMzMz0P5qZmZmZmfE/zczMzMzM9D8AAAAAAAAEQGZmZmZmZv4/zczMzMzMAEDNzMzMzMz8P5qZmZmZmQFAzczMzMzMAEAzMzMzMzP7P83MzMzMzPw/zczMzMzM/D8AAAAAAAAEQAAAAAAAAABAZmZmZmZm/j/NzMzMzMwAQAAAAAAAAABAMzMzMzMzA0BmZmZmZmYCQM3MzMzMzPw/mpmZmZmZAUBmZmZmZmYCQAAAAAAAAPg/ZmZmZmZmAkAAAAAAAAAAQAAAAAAAAABAzczMzMzM/D/NzMzMzMwAQM3MzMzMzPw/zczMzMzM/D/NzMzMzMz8P83MzMzMzABAmpmZmZmZ+T9mZmZmZmb+PwAAAAAAAABAmpmZmZmZAUAAAAAAAAD4P2ZmZmZmZvY/ZmZmZmZmAkAzMzMzMzMDQM3MzMzMzPw/zczMzMzM/D/NzMzMzMwAQDMzMzMzMwNAZmZmZmZmAkBmZmZmZmb+P2ZmZmZmZgJAAAAAAAAABEBmZmZmZmYCQGZmZmZmZv4/AAAAAAAAAEBmZmZmZmYCQM3MzMzMzPw/","dtype":"float64","shape":[150]},"sepal_length":{"__ndarray__":"ZmZmZmZmFECamZmZmZkTQM3MzMzMzBJAZmZmZmZmEkAAAAAAAAAUQJqZmZmZmRVAZmZmZmZmEkAAAAAAAAAUQJqZmZmZmRFAmpmZmZmZE0CamZmZmZkVQDMzMzMzMxNAMzMzMzMzE0AzMzMzMzMRQDMzMzMzMxdAzczMzMzMFkCamZmZmZkVQGZmZmZmZhRAzczMzMzMFkBmZmZmZmYUQJqZmZmZmRVAZmZmZmZmFEBmZmZmZmYSQGZmZmZmZhRAMzMzMzMzE0AAAAAAAAAUQAAAAAAAABRAzczMzMzMFEDNzMzMzMwUQM3MzMzMzBJAMzMzMzMzE0CamZmZmZkVQM3MzMzMzBRAAAAAAAAAFkCamZmZmZkTQAAAAAAAABRAAAAAAAAAFkCamZmZmZkTQJqZmZmZmRFAZmZmZmZmFEAAAAAAAAAUQAAAAAAAABJAmpmZmZmZEUAAAAAAAAAUQGZmZmZmZhRAMzMzMzMzE0BmZmZmZmYUQGZmZmZmZhJAMzMzMzMzFUAAAAAAAAAUQAAAAAAAABxAmpmZmZmZGUCamZmZmZkbQAAAAAAAABZAAAAAAAAAGkDNzMzMzMwWQDMzMzMzMxlAmpmZmZmZE0BmZmZmZmYaQM3MzMzMzBRAAAAAAAAAFECamZmZmZkXQAAAAAAAABhAZmZmZmZmGEBmZmZmZmYWQM3MzMzMzBpAZmZmZmZmFkAzMzMzMzMXQM3MzMzMzBhAZmZmZmZmFkCamZmZmZkXQGZmZmZmZhhAMzMzMzMzGUBmZmZmZmYYQJqZmZmZmRlAZmZmZmZmGkAzMzMzMzMbQM3MzMzMzBpAAAAAAAAAGEDNzMzMzMwWQAAAAAAAABZAAAAAAAAAFkAzMzMzMzMXQAAAAAAAABhAmpmZmZmZFUAAAAAAAAAYQM3MzMzMzBpAMzMzMzMzGUBmZmZmZmYWQAAAAAAAABZAAAAAAAAAFkBmZmZmZmYYQDMzMzMzMxdAAAAAAAAAFEBmZmZmZmYWQM3MzMzMzBZAzczMzMzMFkDNzMzMzMwYQGZmZmZmZhRAzczMzMzMFkAzMzMzMzMZQDMzMzMzMxdAZmZmZmZmHEAzMzMzMzMZQAAAAAAAABpAZmZmZmZmHkCamZmZmZkTQDMzMzMzMx1AzczMzMzMGkDNzMzMzMwcQAAAAAAAABpAmpmZmZmZGUAzMzMzMzMbQM3MzMzMzBZAMzMzMzMzF0CamZmZmZkZQAAAAAAAABpAzczMzMzMHkDNzMzMzMweQAAAAAAAABhAmpmZmZmZG0BmZmZmZmYWQM3MzMzMzB5AMzMzMzMzGUDNzMzMzMwaQM3MzMzMzBxAzczMzMzMGEBmZmZmZmYYQJqZmZmZmRlAzczMzMzMHECamZmZmZkdQJqZmZmZmR9AmpmZmZmZGUAzMzMzMzMZQGZmZmZmZhhAzczMzMzMHkAzMzMzMzMZQJqZmZmZmRlAAAAAAAAAGECamZmZmZkbQM3MzMzMzBpAmpmZmZmZG0AzMzMzMzMXQDMzMzMzMxtAzczMzMzMGkDNzMzMzMwaQDMzMzMzMxlAAAAAAAAAGkDNzMzMzMwYQJqZmZmZmRdA","dtype":"float64","shape":[150]},"sepal_width":{"__ndarray__":"AAAAAAAADEAAAAAAAAAIQJqZmZmZmQlAzczMzMzMCEDNzMzMzMwMQDMzMzMzMw9AMzMzMzMzC0AzMzMzMzMLQDMzMzMzMwdAzczMzMzMCECamZmZmZkNQDMzMzMzMwtAAAAAAAAACEAAAAAAAAAIQAAAAAAAABBAmpmZmZmZEUAzMzMzMzMPQAAAAAAAAAxAZmZmZmZmDkBmZmZmZmYOQDMzMzMzMwtAmpmZmZmZDUDNzMzMzMwMQGZmZmZmZgpAMzMzMzMzC0AAAAAAAAAIQDMzMzMzMwtAAAAAAAAADEAzMzMzMzMLQJqZmZmZmQlAzczMzMzMCEAzMzMzMzMLQGZmZmZmZhBAzczMzMzMEEDNzMzMzMwIQJqZmZmZmQlAAAAAAAAADEDNzMzMzMwMQAAAAAAAAAhAMzMzMzMzC0AAAAAAAAAMQGZmZmZmZgJAmpmZmZmZCUAAAAAAAAAMQGZmZmZmZg5AAAAAAAAACEBmZmZmZmYOQJqZmZmZmQlAmpmZmZmZDUBmZmZmZmYKQJqZmZmZmQlAmpmZmZmZCUDNzMzMzMwIQGZmZmZmZgJAZmZmZmZmBkBmZmZmZmYGQGZmZmZmZgpAMzMzMzMzA0AzMzMzMzMHQJqZmZmZmQVAAAAAAAAAAEAAAAAAAAAIQJqZmZmZmQFAMzMzMzMzB0AzMzMzMzMHQM3MzMzMzAhAAAAAAAAACECamZmZmZkFQJqZmZmZmQFAAAAAAAAABECamZmZmZkJQGZmZmZmZgZAAAAAAAAABEBmZmZmZmYGQDMzMzMzMwdAAAAAAAAACEBmZmZmZmYGQAAAAAAAAAhAMzMzMzMzB0DNzMzMzMwEQDMzMzMzMwNAMzMzMzMzA0CamZmZmZkFQJqZmZmZmQVAAAAAAAAACEAzMzMzMzMLQM3MzMzMzAhAZmZmZmZmAkAAAAAAAAAIQAAAAAAAAARAzczMzMzMBEAAAAAAAAAIQM3MzMzMzARAZmZmZmZmAkCamZmZmZkFQAAAAAAAAAhAMzMzMzMzB0AzMzMzMzMHQAAAAAAAAARAZmZmZmZmBkBmZmZmZmYKQJqZmZmZmQVAAAAAAAAACEAzMzMzMzMHQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAEQDMzMzMzMwdAAAAAAAAABEDNzMzMzMwMQJqZmZmZmQlAmpmZmZmZBUAAAAAAAAAIQAAAAAAAAARAZmZmZmZmBkCamZmZmZkJQAAAAAAAAAhAZmZmZmZmDkDNzMzMzMwEQJqZmZmZmQFAmpmZmZmZCUBmZmZmZmYGQGZmZmZmZgZAmpmZmZmZBUBmZmZmZmYKQJqZmZmZmQlAZmZmZmZmBkAAAAAAAAAIQGZmZmZmZgZAAAAAAAAACEBmZmZmZmYGQGZmZmZmZg5AZmZmZmZmBkBmZmZmZmYGQM3MzMzMzARAAAAAAAAACEAzMzMzMzMLQM3MzMzMzAhAAAAAAAAACEDNzMzMzMwIQM3MzMzMzAhAzczMzMzMCECamZmZmZkFQJqZmZmZmQlAZmZmZmZmCkAAAAAAAAAIQAAAAAAAAARAAAAAAAAACEAzMzMzMzMLQAAAAAAAAAhA","dtype":"float64","shape":[150]},"species":["setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica"]}},"id":"d94ef072-0a16-4d99-b767-b5b69e95c665","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"5bec049b-5d51-4918-8497-cf8903ab5f72","subtype":"Figure","type":"Plot"},{"id":"2c14ae62-7f7d-4d2b-a405-4330ca3afef5","subtype":"Figure","type":"Plot"}]},"id":"3ad5c945-c731-4867-9f7d-be3ec3cf8702","type":"Row"},{"attributes":{"below":[{"id":"94c4e9ab-5a15-4994-acd5-9209b8229934","type":"LinearAxis"}],"left":[{"id":"c556a598-2939-4a5b-b44e-592fce4f322f","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"94c4e9ab-5a15-4994-acd5-9209b8229934","type":"LinearAxis"},{"id":"61231e90-c529-41ca-ad7b-1bc41d0be027","type":"Grid"},{"id":"c556a598-2939-4a5b-b44e-592fce4f322f","type":"LinearAxis"},{"id":"76dd9330-e015-4e4b-8177-2bcf7a759971","type":"Grid"},{"id":"ad214db0-6b6a-4b0f-90c8-3d4aed2b1c50","type":"BoxAnnotation"},{"id":"38a4ce8b-2238-4fb2-baf1-98f60f5d5386","type":"GlyphRenderer"}],"title":{"id":"ea169f48-1448-4352-8bca-910344bbcd6d","type":"Title"},"toolbar":{"id":"1e9848ce-9633-43a8-8967-f49f3b6507fb","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3c1f7541-1211-4dcf-9d3c-2143a83dd699","type":"DataRange1d"},"x_scale":{"id":"c3612fa9-729a-412c-822f-58ad49a83c16","type":"LinearScale"},"y_range":{"id":"d9be4400-a7c5-4d2d-aa38-88b96fde7484","type":"DataRange1d"},"y_scale":{"id":"4b607cbd-8fcc-47de-bf52-daa8b9605a12","type":"LinearScale"}},"id":"2c14ae62-7f7d-4d2b-a405-4330ca3afef5","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"field":"petal_length"},"y":{"field":"petal_width"}},"id":"c2d702ac-ca61-478c-85b3-1aa281c6957c","type":"Circle"},{"attributes":{},"id":"80d20b1f-a6b9-4ca7-b7e9-9b169b542c2a","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ad214db0-6b6a-4b0f-90c8-3d4aed2b1c50","type":"BoxAnnotation"},{"attributes":{},"id":"d2b2cfae-d726-4ec2-b317-4182b655febe","type":"BasicTicker"},{"attributes":{"callback":null},"id":"3c1f7541-1211-4dcf-9d3c-2143a83dd699","type":"DataRange1d"},{"attributes":{},"id":"adc110c1-02ca-4c1f-af8d-81fa3ea7da35","type":"BasicTicker"},{"attributes":{},"id":"3aa7414b-091a-4f59-9a28-045b00de5ea3","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"5bec049b-5d51-4918-8497-cf8903ab5f72","subtype":"Figure","type":"Plot"},"ticker":{"id":"2d1e5a35-3122-47c4-a29c-e5608ef33fcd","type":"BasicTicker"}},"id":"af2b3a4b-90fd-4c50-b5ae-75bf384b755b","type":"Grid"},{"attributes":{"below":[{"id":"7ee51797-f22c-475f-a405-33d90a3f1361","type":"LinearAxis"}],"left":[{"id":"218c11bd-a18f-4c6f-b1af-69c55b12669a","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"7ee51797-f22c-475f-a405-33d90a3f1361","type":"LinearAxis"},{"id":"af2b3a4b-90fd-4c50-b5ae-75bf384b755b","type":"Grid"},{"id":"218c11bd-a18f-4c6f-b1af-69c55b12669a","type":"LinearAxis"},{"id":"5ed8228e-419f-42cb-bd33-4cb7214b5b6e","type":"Grid"},{"id":"50653a0a-72f2-4ed5-8f1d-cd1821b9ea14","type":"BoxAnnotation"},{"id":"ffe6b4ed-b034-4f1b-bafd-8434732cc194","type":"GlyphRenderer"}],"title":{"id":"743ef0a0-2102-4c67-9072-c2abfd3c7dcd","type":"Title"},"toolbar":{"id":"221a3a85-3d08-4b5e-929d-6204dd0df9ed","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3c1f7541-1211-4dcf-9d3c-2143a83dd699","type":"DataRange1d"},"x_scale":{"id":"f189e38e-3ec8-42dc-8f0f-69d25b891e80","type":"LinearScale"},"y_range":{"id":"d9be4400-a7c5-4d2d-aa38-88b96fde7484","type":"DataRange1d"},"y_scale":{"id":"80d20b1f-a6b9-4ca7-b7e9-9b169b542c2a","type":"LinearScale"}},"id":"5bec049b-5d51-4918-8497-cf8903ab5f72","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Full data set"},"id":"743ef0a0-2102-4c67-9072-c2abfd3c7dcd","type":"Title"},{"attributes":{"fill_color":{"value":"black"},"x":{"field":"petal_length"},"y":{"field":"petal_width"}},"id":"960871a3-50a9-421c-9404-a8d54883ac3a","type":"Circle"},{"attributes":{},"id":"b3f292af-24e6-4af0-93ed-b38585b29cc3","type":"ResetTool"},{"attributes":{},"id":"56e85678-6100-4b48-bad8-ebf3f7387b8a","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"50653a0a-72f2-4ed5-8f1d-cd1821b9ea14","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"2c14ae62-7f7d-4d2b-a405-4330ca3afef5","subtype":"Figure","type":"Plot"},"ticker":{"id":"2a2b1863-0c34-4d6b-9416-0d438be19626","type":"BasicTicker"}},"id":"76dd9330-e015-4e4b-8177-2bcf7a759971","type":"Grid"},{"attributes":{},"id":"f189e38e-3ec8-42dc-8f0f-69d25b891e80","type":"LinearScale"},{"attributes":{"children":[{"id":"3ad5c945-c731-4867-9f7d-be3ec3cf8702","type":"Row"}]},"id":"8ca3b064-ac74-46bc-88c2-753cbf187f83","type":"Column"},{"attributes":{"formatter":{"id":"7c59ec65-a995-4b27-906a-dd50efe0aa90","type":"BasicTickFormatter"},"plot":{"id":"2c14ae62-7f7d-4d2b-a405-4330ca3afef5","subtype":"Figure","type":"Plot"},"ticker":{"id":"d2b2cfae-d726-4ec2-b317-4182b655febe","type":"BasicTicker"}},"id":"94c4e9ab-5a15-4994-acd5-9209b8229934","type":"LinearAxis"},{"attributes":{},"id":"4b607cbd-8fcc-47de-bf52-daa8b9605a12","type":"LinearScale"},{"attributes":{},"id":"78200913-7d4d-40df-960d-0f78ac113d8f","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"23cd8acf-527e-4ced-896e-eea7df683f62","type":"BoxSelectTool"},{"id":"b3f292af-24e6-4af0-93ed-b38585b29cc3","type":"ResetTool"},{"id":"f44e081d-7855-407a-8626-2c9ec68afd9e","type":"HelpTool"}]},"id":"1e9848ce-9633-43a8-8967-f49f3b6507fb","type":"Toolbar"},{"attributes":{},"id":"e0a0caf6-abf2-4d3f-9264-befdff912998","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"d94ef072-0a16-4d99-b767-b5b69e95c665","type":"ColumnDataSource"},"glyph":{"id":"c2d702ac-ca61-478c-85b3-1aa281c6957c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"92e93e46-5171-42c0-a777-b9ada5683a23","type":"Circle"},"selection_glyph":null,"view":{"id":"c159dd77-527c-4af1-945d-b0e74338e185","type":"CDSView"}},"id":"38a4ce8b-2238-4fb2-baf1-98f60f5d5386","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"5bec049b-5d51-4918-8497-cf8903ab5f72","subtype":"Figure","type":"Plot"},"ticker":{"id":"adc110c1-02ca-4c1f-af8d-81fa3ea7da35","type":"BasicTicker"}},"id":"5ed8228e-419f-42cb-bd33-4cb7214b5b6e","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"petal_length"},"y":{"field":"petal_width"}},"id":"92e93e46-5171-42c0-a777-b9ada5683a23","type":"Circle"},{"attributes":{"formatter":{"id":"3aa7414b-091a-4f59-9a28-045b00de5ea3","type":"BasicTickFormatter"},"plot":{"id":"2c14ae62-7f7d-4d2b-a405-4330ca3afef5","subtype":"Figure","type":"Plot"},"ticker":{"id":"2a2b1863-0c34-4d6b-9416-0d438be19626","type":"BasicTicker"}},"id":"c556a598-2939-4a5b-b44e-592fce4f322f","type":"LinearAxis"},{"attributes":{"column_name":"species","group":"versicolor"},"id":"cc39999e-eac1-487a-860a-94d8b6e455ef","type":"GroupFilter"}],"root_ids":["56d23dd6-bf84-4fa1-8369-2c38511136eb"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"5381880e-9d44-47e2-acf4-8d31c2701156","elementid":"98050b8b-25cc-453a-8390-bc63f72f33d9","modelid":"56d23dd6-bf84-4fa1-8369-2c38511136eb"}];
                
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
