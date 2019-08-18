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
      };var element = document.getElementById("baf7e45d-c762-4048-bc4a-803a6f5a544c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'baf7e45d-c762-4048-bc4a-803a6f5a544c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"8086fd3f-ae43-4db2-953a-0da6982498f5":{"roots":{"references":[{"attributes":{"data_source":{"id":"9060b181-5851-4926-a995-a9c168850850","type":"ColumnDataSource"},"glyph":{"id":"002d3542-d3c4-4b8d-bd26-6c274df9a990","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"ffe7e887-b590-4708-82c9-86041bdc26af","type":"CDSView"}},"id":"fe6cdbfc-d6bd-4d54-9d8b-009d8c7429d9","type":"GlyphRenderer"},{"attributes":{},"id":"eabee011-5ce7-4f35-a32e-024470349d85","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["left","top","right","bottom"],"data":{"bottom":{"__ndarray__":"ZmZmZmZmEEAzMzMzMzMEQGZmZmZmZvY/MzMzMzMz5z8AAAAAAADgPzMzMzMzM+c/ZmZmZmZm9j8zMzMzMzMEQGZmZmZmZhBA","dtype":"float64","shape":[9]},"left":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"right":{"__ndarray__":"zMzMzMzM7L+amZmZmZnrvzQzMzMzM+O/AAAAAAAAyL8zMzMzMzPTPzMzMzMzM+k/MzMzMzMz8z9nZmZmZmb3PwAAAAAAAPg/","dtype":"float64","shape":[9]},"top":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"9060b181-5851-4926-a995-a9c168850850","type":"ColumnDataSource"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#b3de69"},"left":{"field":"left"},"right":{"field":"right"},"top":{"field":"top"}},"id":"002d3542-d3c4-4b8d-bd26-6c274df9a990","type":"Quad"},{"attributes":{"formatter":{"id":"402a635b-4bb4-4a67-ad05-3508c8fc6386","type":"BasicTickFormatter"},"plot":{"id":"b00bc0db-a456-43f6-9d80-862d6857d725","type":"Plot"},"ticker":{"id":"f6ea7257-8d8c-4ffc-b451-d1de3e84f850","type":"BasicTicker"}},"id":"b4800b3c-f570-4c44-8bc6-93a33cdef8f9","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"bf60fcbf-bb06-41bd-8d47-14e5293ceee6","type":"Toolbar"},{"attributes":{},"id":"7498d8f5-4d8a-4089-b7fe-cdf36fa8d08a","type":"LinearScale"},{"attributes":{},"id":"3be8afa6-17da-481d-b3a3-9bc0d6f45730","type":"BasicTicker"},{"attributes":{"formatter":{"id":"eabee011-5ce7-4f35-a32e-024470349d85","type":"BasicTickFormatter"},"plot":{"id":"b00bc0db-a456-43f6-9d80-862d6857d725","type":"Plot"},"ticker":{"id":"3be8afa6-17da-481d-b3a3-9bc0d6f45730","type":"BasicTicker"}},"id":"f1658155-2f06-462e-a13c-3a59ef70b3a2","type":"LinearAxis"},{"attributes":{},"id":"402a635b-4bb4-4a67-ad05-3508c8fc6386","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"6985773d-005d-4f1e-adec-fc5edfdd84bd","type":"DataRange1d"},{"attributes":{"below":[{"id":"b4800b3c-f570-4c44-8bc6-93a33cdef8f9","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"f1658155-2f06-462e-a13c-3a59ef70b3a2","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"fe6cdbfc-d6bd-4d54-9d8b-009d8c7429d9","type":"GlyphRenderer"},{"id":"b4800b3c-f570-4c44-8bc6-93a33cdef8f9","type":"LinearAxis"},{"id":"f1658155-2f06-462e-a13c-3a59ef70b3a2","type":"LinearAxis"},{"id":"f3edcf60-d4a1-4ee1-bd4e-18016f5aae0e","type":"Grid"},{"id":"68ec3979-9a81-4fb6-b1d2-45a90d33ea45","type":"Grid"}],"title":null,"toolbar":{"id":"bf60fcbf-bb06-41bd-8d47-14e5293ceee6","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"16fb2b6c-00dc-434a-b4cc-9158ba267c9a","type":"DataRange1d"},"x_scale":{"id":"7498d8f5-4d8a-4089-b7fe-cdf36fa8d08a","type":"LinearScale"},"y_range":{"id":"6985773d-005d-4f1e-adec-fc5edfdd84bd","type":"DataRange1d"},"y_scale":{"id":"cf0c2efe-1676-4ba4-91b3-e78ec7dde0e7","type":"LinearScale"}},"id":"b00bc0db-a456-43f6-9d80-862d6857d725","type":"Plot"},{"attributes":{},"id":"cf0c2efe-1676-4ba4-91b3-e78ec7dde0e7","type":"LinearScale"},{"attributes":{"plot":{"id":"b00bc0db-a456-43f6-9d80-862d6857d725","type":"Plot"},"ticker":{"id":"f6ea7257-8d8c-4ffc-b451-d1de3e84f850","type":"BasicTicker"}},"id":"f3edcf60-d4a1-4ee1-bd4e-18016f5aae0e","type":"Grid"},{"attributes":{},"id":"f6ea7257-8d8c-4ffc-b451-d1de3e84f850","type":"BasicTicker"},{"attributes":{"callback":null},"id":"16fb2b6c-00dc-434a-b4cc-9158ba267c9a","type":"DataRange1d"},{"attributes":{"source":{"id":"9060b181-5851-4926-a995-a9c168850850","type":"ColumnDataSource"}},"id":"ffe7e887-b590-4708-82c9-86041bdc26af","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"b00bc0db-a456-43f6-9d80-862d6857d725","type":"Plot"},"ticker":{"id":"3be8afa6-17da-481d-b3a3-9bc0d6f45730","type":"BasicTicker"}},"id":"68ec3979-9a81-4fb6-b1d2-45a90d33ea45","type":"Grid"}],"root_ids":["b00bc0db-a456-43f6-9d80-862d6857d725"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"8086fd3f-ae43-4db2-953a-0da6982498f5","elementid":"baf7e45d-c762-4048-bc4a-803a6f5a544c","modelid":"b00bc0db-a456-43f6-9d80-862d6857d725"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
