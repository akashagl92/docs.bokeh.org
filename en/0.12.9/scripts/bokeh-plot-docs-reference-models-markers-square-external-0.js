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
      };var element = document.getElementById("98ab2384-2053-4797-b306-e46beb8b52e7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '98ab2384-2053-4797-b306-e46beb8b52e7' but no matching script tag was found. ")
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
                    var docs_json = {"7442bda6-f99c-4331-82ef-de69f160901d":{"roots":{"references":[{"attributes":{},"id":"10d13720-1227-489d-84e5-b68a63360b42","type":"BasicTicker"},{"attributes":{"formatter":{"id":"ad7f74b8-e555-46d7-be69-51cd96b9c046","type":"BasicTickFormatter"},"plot":{"id":"c338006a-b1a4-47de-9f6e-496a2f7d5471","type":"Plot"},"ticker":{"id":"10d13720-1227-489d-84e5-b68a63360b42","type":"BasicTicker"}},"id":"b0188b08-d097-470c-a9b7-19c0eb6c3661","type":"LinearAxis"},{"attributes":{"formatter":{"id":"cdbf41d1-893d-416f-8084-b02af84a616c","type":"BasicTickFormatter"},"plot":{"id":"c338006a-b1a4-47de-9f6e-496a2f7d5471","type":"Plot"},"ticker":{"id":"e434fb59-cc09-4c89-8807-82ae38b961b3","type":"BasicTicker"}},"id":"81532707-daa0-48cc-9637-2933d1437cc6","type":"LinearAxis"},{"attributes":{"plot":{"id":"c338006a-b1a4-47de-9f6e-496a2f7d5471","type":"Plot"},"ticker":{"id":"e434fb59-cc09-4c89-8807-82ae38b961b3","type":"BasicTicker"}},"id":"aded3b30-96fd-40bb-b9b7-189f1ad610bb","type":"Grid"},{"attributes":{},"id":"e434fb59-cc09-4c89-8807-82ae38b961b3","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"c338006a-b1a4-47de-9f6e-496a2f7d5471","type":"Plot"},"ticker":{"id":"10d13720-1227-489d-84e5-b68a63360b42","type":"BasicTicker"}},"id":"2aef8012-c31f-4c01-8710-dcec95f6648c","type":"Grid"},{"attributes":{"callback":null},"id":"284621c8-baf1-4ba5-a8fc-14819cca29b5","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"892faa4c-bffc-4cc6-8f1d-8da81836d716","type":"Toolbar"},{"attributes":{"callback":null},"id":"74ec157d-adc4-43ff-bd88-58968dbac20b","type":"DataRange1d"},{"attributes":{},"id":"ad7f74b8-e555-46d7-be69-51cd96b9c046","type":"BasicTickFormatter"},{"attributes":{},"id":"cdbf41d1-893d-416f-8084-b02af84a616c","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"c67afaa8-ff88-4c6f-9405-87582ff70722","type":"ColumnDataSource"},"glyph":{"id":"a076c833-79dd-4c06-9640-77d82c1d1ab3","type":"Square"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"4570f8c4-1c5c-47c3-a3fe-89e43acdf5e6","type":"CDSView"}},"id":"141c3b9c-0e5b-494d-9418-6abb60df92a8","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"81532707-daa0-48cc-9637-2933d1437cc6","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"b0188b08-d097-470c-a9b7-19c0eb6c3661","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"141c3b9c-0e5b-494d-9418-6abb60df92a8","type":"GlyphRenderer"},{"id":"81532707-daa0-48cc-9637-2933d1437cc6","type":"LinearAxis"},{"id":"b0188b08-d097-470c-a9b7-19c0eb6c3661","type":"LinearAxis"},{"id":"aded3b30-96fd-40bb-b9b7-189f1ad610bb","type":"Grid"},{"id":"2aef8012-c31f-4c01-8710-dcec95f6648c","type":"Grid"}],"title":null,"toolbar":{"id":"892faa4c-bffc-4cc6-8f1d-8da81836d716","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"284621c8-baf1-4ba5-a8fc-14819cca29b5","type":"DataRange1d"},"x_scale":{"id":"533b0eda-03dc-4995-a4e4-1b4246f6bdba","type":"LinearScale"},"y_range":{"id":"74ec157d-adc4-43ff-bd88-58968dbac20b","type":"DataRange1d"},"y_scale":{"id":"c9e98d62-c36e-4fd0-992c-79c7b2ff7c7c","type":"LinearScale"}},"id":"c338006a-b1a4-47de-9f6e-496a2f7d5471","type":"Plot"},{"attributes":{"source":{"id":"c67afaa8-ff88-4c6f-9405-87582ff70722","type":"ColumnDataSource"}},"id":"4570f8c4-1c5c-47c3-a3fe-89e43acdf5e6","type":"CDSView"},{"attributes":{},"id":"533b0eda-03dc-4995-a4e4-1b4246f6bdba","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"c67afaa8-ff88-4c6f-9405-87582ff70722","type":"ColumnDataSource"},{"attributes":{},"id":"c9e98d62-c36e-4fd0-992c-79c7b2ff7c7c","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#74add1"},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a076c833-79dd-4c06-9640-77d82c1d1ab3","type":"Square"}],"root_ids":["c338006a-b1a4-47de-9f6e-496a2f7d5471"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"7442bda6-f99c-4331-82ef-de69f160901d","elementid":"98ab2384-2053-4797-b306-e46beb8b52e7","modelid":"c338006a-b1a4-47de-9f6e-496a2f7d5471"}];
                
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
