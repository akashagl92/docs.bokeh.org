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
      };var element = document.getElementById("4449c795-47cf-40ae-a75d-2d6ed6d5fabc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4449c795-47cf-40ae-a75d-2d6ed6d5fabc' but no matching script tag was found. ")
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
                    var docs_json = {"406ae9d4-4e59-41e2-86dd-8779c5c93623":{"roots":{"references":[{"attributes":{"h":{"units":"data","value":20},"url":{"field":"url"},"w":{"units":"data","value":20},"x":{"field":"x2"},"y":{"field":"y2"}},"id":"b6def869-4358-42c9-8a49-998cd7fd0e67","type":"ImageURL"},{"attributes":{"callback":null,"column_names":["url","x1","y1","w1","h1","x2","y2"],"data":{"h1":{"__ndarray__":"AAAAAAAAJEAAAAAAAAA0QAAAAAAAAD5AAAAAAAAAREAAAAAAAABJQA==","dtype":"float64","shape":[5]},"url":["https://bokeh.pydata.org/en/latest/_static/images/logo.png","https://bokeh.pydata.org/en/latest/_static/images/logo.png","https://bokeh.pydata.org/en/latest/_static/images/logo.png","https://bokeh.pydata.org/en/latest/_static/images/logo.png","https://bokeh.pydata.org/en/latest/_static/images/logo.png"],"w1":{"__ndarray__":"AAAAAAAAJEAAAAAAAAA0QAAAAAAAAD5AAAAAAAAAREAAAAAAAABJQA==","dtype":"float64","shape":[5]},"x1":{"__ndarray__":"AAAAAAAAAAAAAAAAAMBCQAAAAAAAwFJAAAAAAAAgXEAAAAAAAMBiQA==","dtype":"float64","shape":[5]},"x2":{"__ndarray__":"AAAAAAAAScAAAAAAAAAAAAAAAAAAAElAAAAAAAAAWUAAAAAAAMBiQA==","dtype":"float64","shape":[5]},"y1":{"__ndarray__":"AAAAAAAAAAAAAAAAAMBCQAAAAAAAwFJAAAAAAAAgXEAAAAAAAMBiQA==","dtype":"float64","shape":[5]},"y2":{"__ndarray__":"AAAAAAAAAAAAAAAAAABJQAAAAAAAAFlAAAAAAADAYkAAAAAAAABpQA==","dtype":"float64","shape":[5]}}},"id":"8891fac9-d7d3-4c1d-96f5-c9bcb075a18b","type":"ColumnDataSource"},{"attributes":{"anchor":"bottom_right","url":{"value":"https://bokeh.pydata.org/en/latest/_static/images/logo.png"},"x":{"value":200},"y":{"value":-100}},"id":"392eb871-ad66-4672-8e9b-fd3276787ed3","type":"ImageURL"},{"attributes":{"callback":null,"end":200,"start":-100},"id":"4dff0361-ae44-4056-8b9d-ff27614a11e6","type":"Range1d"},{"attributes":{},"id":"45e2fd5e-4267-4dfe-b13e-7e34e7eefdd6","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"8891fac9-d7d3-4c1d-96f5-c9bcb075a18b","type":"ColumnDataSource"},"glyph":{"id":"392eb871-ad66-4672-8e9b-fd3276787ed3","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"90f397e2-a306-4f84-8802-f3cd2fba4ccb","type":"CDSView"}},"id":"ca6c12e5-4536-4053-8136-2be66ca1813a","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"bbd68d85-f001-4cee-a1df-4224c0ed7b6e","type":"Toolbar"},{"attributes":{"data_source":{"id":"8891fac9-d7d3-4c1d-96f5-c9bcb075a18b","type":"ColumnDataSource"},"glyph":{"id":"b6def869-4358-42c9-8a49-998cd7fd0e67","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"dd953cc5-e542-4f6a-abf6-e7a487805f1e","type":"CDSView"}},"id":"31322521-1d40-4662-bd82-d9d41c6cc115","type":"GlyphRenderer"},{"attributes":{"source":{"id":"8891fac9-d7d3-4c1d-96f5-c9bcb075a18b","type":"ColumnDataSource"}},"id":"90f397e2-a306-4f84-8802-f3cd2fba4ccb","type":"CDSView"},{"attributes":{"source":{"id":"8891fac9-d7d3-4c1d-96f5-c9bcb075a18b","type":"ColumnDataSource"}},"id":"1d649c50-4b28-421f-b9a5-8f32daa0d8f1","type":"CDSView"},{"attributes":{"plot":{"id":"8c56c593-1ef6-4558-bee1-96e93b4ccb7b","type":"Plot"},"ticker":{"id":"2d29b9a0-cb37-4e84-a8a6-9f27ce913f87","type":"BasicTicker"}},"id":"f3fc5dde-3c03-44b2-a0c2-80b42c1ba12b","type":"Grid"},{"attributes":{},"id":"87db6598-aee7-4bf3-a4c2-b6d48e509e44","type":"LinearScale"},{"attributes":{},"id":"90452f38-d9f0-4f5e-8fab-17a348980fd2","type":"BasicTicker"},{"attributes":{},"id":"bb1a8377-93d0-423c-b5bd-4554bf7cb397","type":"LinearScale"},{"attributes":{"below":[{"id":"c08e4f04-3597-424c-90cc-68b3d74e2781","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"c1a49ceb-2280-4201-b8d0-590ffa575a2d","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"74ecbc98-5442-4102-b883-5643f42598db","type":"GlyphRenderer"},{"id":"31322521-1d40-4662-bd82-d9d41c6cc115","type":"GlyphRenderer"},{"id":"ca6c12e5-4536-4053-8136-2be66ca1813a","type":"GlyphRenderer"},{"id":"c08e4f04-3597-424c-90cc-68b3d74e2781","type":"LinearAxis"},{"id":"c1a49ceb-2280-4201-b8d0-590ffa575a2d","type":"LinearAxis"},{"id":"f3fc5dde-3c03-44b2-a0c2-80b42c1ba12b","type":"Grid"},{"id":"b60a3ec7-3501-4d55-91cb-93a0a6a367b1","type":"Grid"}],"title":null,"toolbar":{"id":"bbd68d85-f001-4cee-a1df-4224c0ed7b6e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"28f8655a-6509-40d1-8a24-c4545d852155","type":"Range1d"},"x_scale":{"id":"87db6598-aee7-4bf3-a4c2-b6d48e509e44","type":"LinearScale"},"y_range":{"id":"4dff0361-ae44-4056-8b9d-ff27614a11e6","type":"Range1d"},"y_scale":{"id":"bb1a8377-93d0-423c-b5bd-4554bf7cb397","type":"LinearScale"}},"id":"8c56c593-1ef6-4558-bee1-96e93b4ccb7b","type":"Plot"},{"attributes":{"anchor":"center","h":{"field":"h1","units":"data"},"url":{"field":"url"},"w":{"field":"w1","units":"data"},"x":{"field":"x1"},"y":{"field":"y1"}},"id":"bf2a56f7-a498-4114-aa50-73b20501d652","type":"ImageURL"},{"attributes":{"source":{"id":"8891fac9-d7d3-4c1d-96f5-c9bcb075a18b","type":"ColumnDataSource"}},"id":"dd953cc5-e542-4f6a-abf6-e7a487805f1e","type":"CDSView"},{"attributes":{},"id":"aef52913-72ae-4164-994d-ae47dc4d5b92","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"8c56c593-1ef6-4558-bee1-96e93b4ccb7b","type":"Plot"},"ticker":{"id":"90452f38-d9f0-4f5e-8fab-17a348980fd2","type":"BasicTicker"}},"id":"b60a3ec7-3501-4d55-91cb-93a0a6a367b1","type":"Grid"},{"attributes":{},"id":"2d29b9a0-cb37-4e84-a8a6-9f27ce913f87","type":"BasicTicker"},{"attributes":{"formatter":{"id":"45e2fd5e-4267-4dfe-b13e-7e34e7eefdd6","type":"BasicTickFormatter"},"plot":{"id":"8c56c593-1ef6-4558-bee1-96e93b4ccb7b","type":"Plot"},"ticker":{"id":"90452f38-d9f0-4f5e-8fab-17a348980fd2","type":"BasicTicker"}},"id":"c1a49ceb-2280-4201-b8d0-590ffa575a2d","type":"LinearAxis"},{"attributes":{"data_source":{"id":"8891fac9-d7d3-4c1d-96f5-c9bcb075a18b","type":"ColumnDataSource"},"glyph":{"id":"bf2a56f7-a498-4114-aa50-73b20501d652","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"1d649c50-4b28-421f-b9a5-8f32daa0d8f1","type":"CDSView"}},"id":"74ecbc98-5442-4102-b883-5643f42598db","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":200,"start":-100},"id":"28f8655a-6509-40d1-8a24-c4545d852155","type":"Range1d"},{"attributes":{"formatter":{"id":"aef52913-72ae-4164-994d-ae47dc4d5b92","type":"BasicTickFormatter"},"plot":{"id":"8c56c593-1ef6-4558-bee1-96e93b4ccb7b","type":"Plot"},"ticker":{"id":"2d29b9a0-cb37-4e84-a8a6-9f27ce913f87","type":"BasicTicker"}},"id":"c08e4f04-3597-424c-90cc-68b3d74e2781","type":"LinearAxis"}],"root_ids":["8c56c593-1ef6-4558-bee1-96e93b4ccb7b"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"406ae9d4-4e59-41e2-86dd-8779c5c93623","elementid":"4449c795-47cf-40ae-a75d-2d6ed6d5fabc","modelid":"8c56c593-1ef6-4558-bee1-96e93b4ccb7b"}];
                
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
