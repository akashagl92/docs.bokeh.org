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
      };var element = document.getElementById("e570ccd7-bbb4-4af2-a90c-e9963cb44ed8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e570ccd7-bbb4-4af2-a90c-e9963cb44ed8' but no matching script tag was found. ")
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
                    var docs_json = {"708d5b95-2d72-4e06-9b36-199c781ea9d7":{"roots":{"references":[{"attributes":{},"id":"e1ded975-3eb2-4c16-8812-a67edce95b1f","type":"LinearScale"},{"attributes":{},"id":"e739275f-e3b7-4291-98ca-ddc3434559d8","type":"LinearScale"},{"attributes":{"source":{"id":"29734531-be34-4f75-ac1a-20a877bd737f","type":"ColumnDataSource"}},"id":"2079e8cf-1cf3-440a-ae57-82c7e1bf0658","type":"CDSView"},{"attributes":{},"id":"599caa7f-8478-4b00-935e-965ecdaa8189","type":"BasicTicker"},{"attributes":{"data_source":{"id":"29734531-be34-4f75-ac1a-20a877bd737f","type":"ColumnDataSource"},"glyph":{"id":"250f9cb0-91de-445d-91af-6ada0fa13352","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"8c88bf15-9c99-4179-97ef-8b4cfbc0bb03","type":"CDSView"}},"id":"b3236618-2805-4baa-ab1b-9b1e22bb5224","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":200,"start":-100},"id":"b0fc2290-4879-460c-887b-dc9b75a132dd","type":"Range1d"},{"attributes":{},"id":"e2acb268-868b-475d-bf29-55b95d8b6ea0","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["url","x1","y1","w1","h1","x2","y2"],"data":{"h1":{"__ndarray__":"AAAAAAAAJEAAAAAAAAA0QAAAAAAAAD5AAAAAAAAAREAAAAAAAABJQA==","dtype":"float64","shape":[5]},"url":["https://bokeh.pydata.org/en/latest/_static/images/logo.png","https://bokeh.pydata.org/en/latest/_static/images/logo.png","https://bokeh.pydata.org/en/latest/_static/images/logo.png","https://bokeh.pydata.org/en/latest/_static/images/logo.png","https://bokeh.pydata.org/en/latest/_static/images/logo.png"],"w1":{"__ndarray__":"AAAAAAAAJEAAAAAAAAA0QAAAAAAAAD5AAAAAAAAAREAAAAAAAABJQA==","dtype":"float64","shape":[5]},"x1":{"__ndarray__":"AAAAAAAAAAAAAAAAAMBCQAAAAAAAwFJAAAAAAAAgXEAAAAAAAMBiQA==","dtype":"float64","shape":[5]},"x2":{"__ndarray__":"AAAAAAAAScAAAAAAAAAAAAAAAAAAAElAAAAAAAAAWUAAAAAAAMBiQA==","dtype":"float64","shape":[5]},"y1":{"__ndarray__":"AAAAAAAAAAAAAAAAAMBCQAAAAAAAwFJAAAAAAAAgXEAAAAAAAMBiQA==","dtype":"float64","shape":[5]},"y2":{"__ndarray__":"AAAAAAAAAAAAAAAAAABJQAAAAAAAAFlAAAAAAADAYkAAAAAAAABpQA==","dtype":"float64","shape":[5]}}},"id":"29734531-be34-4f75-ac1a-20a877bd737f","type":"ColumnDataSource"},{"attributes":{"anchor":"bottom_right","url":{"value":"https://bokeh.pydata.org/en/latest/_static/images/logo.png"},"x":{"value":200},"y":{"value":-100}},"id":"250f9cb0-91de-445d-91af-6ada0fa13352","type":"ImageURL"},{"attributes":{"anchor":"center","h":{"field":"h1","units":"data"},"url":{"field":"url"},"w":{"field":"w1","units":"data"},"x":{"field":"x1"},"y":{"field":"y1"}},"id":"8f6bee73-5ef7-46c6-904d-470fc74b893d","type":"ImageURL"},{"attributes":{"source":{"id":"29734531-be34-4f75-ac1a-20a877bd737f","type":"ColumnDataSource"}},"id":"8c88bf15-9c99-4179-97ef-8b4cfbc0bb03","type":"CDSView"},{"attributes":{"formatter":{"id":"0104ed57-a8a3-4d1b-83e6-0fcdc9be284c","type":"BasicTickFormatter"},"plot":{"id":"437489a9-c359-4a19-aec1-fa654e5f7df0","type":"Plot"},"ticker":{"id":"6c4dfeae-f6d9-4967-8b36-39a9225e2135","type":"BasicTicker"}},"id":"10de3215-f03e-47bf-9ce1-bb5abdd6cfb8","type":"LinearAxis"},{"attributes":{"plot":{"id":"437489a9-c359-4a19-aec1-fa654e5f7df0","type":"Plot"},"ticker":{"id":"6c4dfeae-f6d9-4967-8b36-39a9225e2135","type":"BasicTicker"}},"id":"d76df353-97bf-47c3-ac9c-f96065303293","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"16034d31-96a6-43e7-adef-37f671003b5f","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"437489a9-c359-4a19-aec1-fa654e5f7df0","type":"Plot"},"ticker":{"id":"599caa7f-8478-4b00-935e-965ecdaa8189","type":"BasicTicker"}},"id":"dfd7b868-1840-4463-89fe-9a75369d8294","type":"Grid"},{"attributes":{"data_source":{"id":"29734531-be34-4f75-ac1a-20a877bd737f","type":"ColumnDataSource"},"glyph":{"id":"e84f688c-9d4f-47ea-89fc-907504b495d8","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"2079e8cf-1cf3-440a-ae57-82c7e1bf0658","type":"CDSView"}},"id":"960268ed-751a-4689-b59d-0123c539c454","type":"GlyphRenderer"},{"attributes":{"h":{"units":"data","value":20},"url":{"field":"url"},"w":{"units":"data","value":20},"x":{"field":"x2"},"y":{"field":"y2"}},"id":"e84f688c-9d4f-47ea-89fc-907504b495d8","type":"ImageURL"},{"attributes":{"callback":null,"end":200,"start":-100},"id":"dcec3b3a-3342-48e5-8886-8d1b97136451","type":"Range1d"},{"attributes":{"source":{"id":"29734531-be34-4f75-ac1a-20a877bd737f","type":"ColumnDataSource"}},"id":"53f460b5-254f-481b-8b9b-3c29ee7324ec","type":"CDSView"},{"attributes":{"formatter":{"id":"e2acb268-868b-475d-bf29-55b95d8b6ea0","type":"BasicTickFormatter"},"plot":{"id":"437489a9-c359-4a19-aec1-fa654e5f7df0","type":"Plot"},"ticker":{"id":"599caa7f-8478-4b00-935e-965ecdaa8189","type":"BasicTicker"}},"id":"4564832f-980d-426a-9855-f3a62094d89b","type":"LinearAxis"},{"attributes":{"below":[{"id":"10de3215-f03e-47bf-9ce1-bb5abdd6cfb8","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"4564832f-980d-426a-9855-f3a62094d89b","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"e9192152-1d4a-4378-83f4-91b9344d3700","type":"GlyphRenderer"},{"id":"960268ed-751a-4689-b59d-0123c539c454","type":"GlyphRenderer"},{"id":"b3236618-2805-4baa-ab1b-9b1e22bb5224","type":"GlyphRenderer"},{"id":"10de3215-f03e-47bf-9ce1-bb5abdd6cfb8","type":"LinearAxis"},{"id":"4564832f-980d-426a-9855-f3a62094d89b","type":"LinearAxis"},{"id":"d76df353-97bf-47c3-ac9c-f96065303293","type":"Grid"},{"id":"dfd7b868-1840-4463-89fe-9a75369d8294","type":"Grid"}],"title":null,"toolbar":{"id":"16034d31-96a6-43e7-adef-37f671003b5f","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"b0fc2290-4879-460c-887b-dc9b75a132dd","type":"Range1d"},"x_scale":{"id":"e739275f-e3b7-4291-98ca-ddc3434559d8","type":"LinearScale"},"y_range":{"id":"dcec3b3a-3342-48e5-8886-8d1b97136451","type":"Range1d"},"y_scale":{"id":"e1ded975-3eb2-4c16-8812-a67edce95b1f","type":"LinearScale"}},"id":"437489a9-c359-4a19-aec1-fa654e5f7df0","type":"Plot"},{"attributes":{},"id":"6c4dfeae-f6d9-4967-8b36-39a9225e2135","type":"BasicTicker"},{"attributes":{"data_source":{"id":"29734531-be34-4f75-ac1a-20a877bd737f","type":"ColumnDataSource"},"glyph":{"id":"8f6bee73-5ef7-46c6-904d-470fc74b893d","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"53f460b5-254f-481b-8b9b-3c29ee7324ec","type":"CDSView"}},"id":"e9192152-1d4a-4378-83f4-91b9344d3700","type":"GlyphRenderer"},{"attributes":{},"id":"0104ed57-a8a3-4d1b-83e6-0fcdc9be284c","type":"BasicTickFormatter"}],"root_ids":["437489a9-c359-4a19-aec1-fa654e5f7df0"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"708d5b95-2d72-4e06-9b36-199c781ea9d7","elementid":"e570ccd7-bbb4-4af2-a90c-e9963cb44ed8","modelid":"437489a9-c359-4a19-aec1-fa654e5f7df0"}];
                
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
