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
      };var element = document.getElementById("f02b3c1b-9311-45c0-a817-a6d46fbc7272");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f02b3c1b-9311-45c0-a817-a6d46fbc7272' but no matching script tag was found. ")
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
                    var docs_json = {"e5703dbc-2ef4-4f7f-b62a-a208eac6b0ff":{"roots":{"references":[{"attributes":{"cx":{"field":"xp01"},"cy":{"field":"yp01"},"line_color":{"value":"#4DAF4A"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"xp02"},"y0":{"field":"y"},"y1":{"field":"y"}},"id":"5528edb5-635c-4e07-afcb-19754bb8db80","type":"Quadratic"},{"attributes":{"source":{"id":"f533d9f2-91b0-432f-b561-cca70fed43cb","type":"ColumnDataSource"}},"id":"44570bed-d316-4c36-bc86-bbc570cd5b35","type":"CDSView"},{"attributes":{},"id":"14f53a3f-048b-4720-b215-f85664b7ef75","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"14f53a3f-048b-4720-b215-f85664b7ef75","type":"BasicTickFormatter"},"plot":{"id":"71eb2f5a-2687-42b8-9ff4-6385737e202c","type":"Plot"},"ticker":{"id":"37d98949-5210-45fa-8ce1-5ff901d37290","type":"BasicTicker"}},"id":"ce38f95c-6c64-48da-bbe2-5ca76ad51f65","type":"LinearAxis"},{"attributes":{"below":[{"id":"1b4c7cf3-1e53-4262-9765-bd7d68bdc5fc","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"ce38f95c-6c64-48da-bbe2-5ca76ad51f65","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"9fe534f5-facc-4430-9756-113ea4807220","type":"GlyphRenderer"},{"id":"1b4c7cf3-1e53-4262-9765-bd7d68bdc5fc","type":"LinearAxis"},{"id":"ce38f95c-6c64-48da-bbe2-5ca76ad51f65","type":"LinearAxis"},{"id":"7dfe33f7-9748-4075-9767-a766c595cb9c","type":"Grid"},{"id":"ee675dd3-00c2-4667-888c-91fd6f92e25d","type":"Grid"}],"title":null,"toolbar":{"id":"bec98bbd-0d36-4bb8-a1b6-f7e8e306ef57","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"732cfdd7-0f03-4cac-bb65-f1a615d64966","type":"DataRange1d"},"x_scale":{"id":"cdf35bba-f488-466f-ac64-83ce4d4d896e","type":"LinearScale"},"y_range":{"id":"f5b7ad2f-11ea-4409-9be7-80513240714b","type":"DataRange1d"},"y_scale":{"id":"5aecdaa6-95fb-414b-bf8c-46525623fe5f","type":"LinearScale"}},"id":"71eb2f5a-2687-42b8-9ff4-6385737e202c","type":"Plot"},{"attributes":{"formatter":{"id":"a5f918ba-3995-433b-a06d-60b43ee646d1","type":"BasicTickFormatter"},"plot":{"id":"71eb2f5a-2687-42b8-9ff4-6385737e202c","type":"Plot"},"ticker":{"id":"0e16971e-c9ae-45a5-97f1-8a15ca952b6c","type":"BasicTicker"}},"id":"1b4c7cf3-1e53-4262-9765-bd7d68bdc5fc","type":"LinearAxis"},{"attributes":{},"id":"37d98949-5210-45fa-8ce1-5ff901d37290","type":"BasicTicker"},{"attributes":{"data_source":{"id":"f533d9f2-91b0-432f-b561-cca70fed43cb","type":"ColumnDataSource"},"glyph":{"id":"5528edb5-635c-4e07-afcb-19754bb8db80","type":"Quadratic"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"44570bed-d316-4c36-bc86-bbc570cd5b35","type":"CDSView"}},"id":"9fe534f5-facc-4430-9756-113ea4807220","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"f5b7ad2f-11ea-4409-9be7-80513240714b","type":"DataRange1d"},{"attributes":{"callback":null},"id":"732cfdd7-0f03-4cac-bb65-f1a615d64966","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"71eb2f5a-2687-42b8-9ff4-6385737e202c","type":"Plot"},"ticker":{"id":"37d98949-5210-45fa-8ce1-5ff901d37290","type":"BasicTicker"}},"id":"ee675dd3-00c2-4667-888c-91fd6f92e25d","type":"Grid"},{"attributes":{},"id":"5aecdaa6-95fb-414b-bf8c-46525623fe5f","type":"LinearScale"},{"attributes":{},"id":"a5f918ba-3995-433b-a06d-60b43ee646d1","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"71eb2f5a-2687-42b8-9ff4-6385737e202c","type":"Plot"},"ticker":{"id":"0e16971e-c9ae-45a5-97f1-8a15ca952b6c","type":"BasicTicker"}},"id":"7dfe33f7-9748-4075-9767-a766c595cb9c","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"bec98bbd-0d36-4bb8-a1b6-f7e8e306ef57","type":"Toolbar"},{"attributes":{},"id":"cdf35bba-f488-466f-ac64-83ce4d4d896e","type":"LinearScale"},{"attributes":{},"id":"0e16971e-c9ae-45a5-97f1-8a15ca952b6c","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y","xp02","xp01","yp01"],"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"xp01":{"__ndarray__":"ZmZmZmZm/r9mZmZmZmb2v83MzMzMzOy/mpmZmZmZ2b+amZmZmZm5PzMzMzMzM+M/mpmZmZmZ8T+amZmZmZn5P83MzMzMzABA","dtype":"float64","shape":[9]},"xp02":{"__ndarray__":"mpmZmZmZ+b+amZmZmZnxvzMzMzMzM+O/mJmZmZmZub+amZmZmZnZP83MzMzMzOw/ZmZmZmZm9j9mZmZmZmb+PzMzMzMzMwNA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"yp01":{"__ndarray__":"zczMzMzMEECamZmZmZkDQDMzMzMzM/M/zczMzMzM3D+amZmZmZnJP83MzMzMzNw/MzMzMzMz8z+amZmZmZkDQM3MzMzMzBBA","dtype":"float64","shape":[9]}}},"id":"f533d9f2-91b0-432f-b561-cca70fed43cb","type":"ColumnDataSource"}],"root_ids":["71eb2f5a-2687-42b8-9ff4-6385737e202c"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"e5703dbc-2ef4-4f7f-b62a-a208eac6b0ff","elementid":"f02b3c1b-9311-45c0-a817-a6d46fbc7272","modelid":"71eb2f5a-2687-42b8-9ff4-6385737e202c"}];
                
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
