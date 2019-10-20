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
      };var element = document.getElementById("97e9d5de-a081-4456-90ab-5504ff6fa69d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '97e9d5de-a081-4456-90ab-5504ff6fa69d' but no matching script tag was found. ")
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
                    var docs_json = {"06bb8c6a-82ad-425f-b7d1-1446bdf644cf":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"630457fa-f659-45a7-a7f9-86a949ec0c5e","type":"Plot"},"ticker":{"id":"63380004-0256-44ba-86e0-b1d22b5b56c7","type":"BasicTicker"}},"id":"2b0215de-4b3c-4f99-be92-3f791df7dd73","type":"Grid"},{"attributes":{},"id":"2bfdb95e-f420-453c-8f4b-41bdf2166920","type":"BasicTickFormatter"},{"attributes":{},"id":"b57df416-0091-4f7d-90fe-1d3471301d1f","type":"BasicTicker"},{"attributes":{"below":[{"id":"f130eae3-8333-4fb8-950a-7564269eba8b","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"741642d9-87df-4166-931d-e9adb3bd9e14","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"1272875c-55b3-489e-96d5-c937c1935164","type":"GlyphRenderer"},{"id":"f130eae3-8333-4fb8-950a-7564269eba8b","type":"LinearAxis"},{"id":"741642d9-87df-4166-931d-e9adb3bd9e14","type":"LinearAxis"},{"id":"0c07e97e-8b66-4b05-acf0-d298e742d1a5","type":"Grid"},{"id":"2b0215de-4b3c-4f99-be92-3f791df7dd73","type":"Grid"}],"title":null,"toolbar":{"id":"2ae81791-cd4e-485c-9566-5b7186817c55","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ef9511a0-bf76-4e1d-833b-9a9c4556a155","type":"DataRange1d"},"x_scale":{"id":"87163009-d3ec-43a9-8693-1f3b50e88699","type":"LinearScale"},"y_range":{"id":"501bc523-9183-4e91-b3e5-8fb1e02b4ecb","type":"DataRange1d"},"y_scale":{"id":"a615fb79-0fad-425f-8100-d5b3a2bd353f","type":"LinearScale"}},"id":"630457fa-f659-45a7-a7f9-86a949ec0c5e","type":"Plot"},{"attributes":{},"id":"63380004-0256-44ba-86e0-b1d22b5b56c7","type":"BasicTicker"},{"attributes":{"callback":null},"id":"501bc523-9183-4e91-b3e5-8fb1e02b4ecb","type":"DataRange1d"},{"attributes":{"source":{"id":"3b71b040-844d-4c20-b695-9dd49e70eaf3","type":"ColumnDataSource"}},"id":"4a57e33e-63d4-405f-b2f0-93b054eacb79","type":"CDSView"},{"attributes":{},"id":"a615fb79-0fad-425f-8100-d5b3a2bd353f","type":"LinearScale"},{"attributes":{"callback":null},"id":"ef9511a0-bf76-4e1d-833b-9a9c4556a155","type":"DataRange1d"},{"attributes":{},"id":"87163009-d3ec-43a9-8693-1f3b50e88699","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y","text"],"data":{"text":["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"],"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"3b71b040-844d-4c20-b695-9dd49e70eaf3","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"2ae81791-cd4e-485c-9566-5b7186817c55","type":"Toolbar"},{"attributes":{"data_source":{"id":"3b71b040-844d-4c20-b695-9dd49e70eaf3","type":"ColumnDataSource"},"glyph":{"id":"c817ea82-80b4-4467-9eb3-5f232e9a6f37","type":"Text"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"4a57e33e-63d4-405f-b2f0-93b054eacb79","type":"CDSView"}},"id":"1272875c-55b3-489e-96d5-c937c1935164","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"2bfdb95e-f420-453c-8f4b-41bdf2166920","type":"BasicTickFormatter"},"plot":{"id":"630457fa-f659-45a7-a7f9-86a949ec0c5e","type":"Plot"},"ticker":{"id":"b57df416-0091-4f7d-90fe-1d3471301d1f","type":"BasicTicker"}},"id":"f130eae3-8333-4fb8-950a-7564269eba8b","type":"LinearAxis"},{"attributes":{"plot":{"id":"630457fa-f659-45a7-a7f9-86a949ec0c5e","type":"Plot"},"ticker":{"id":"b57df416-0091-4f7d-90fe-1d3471301d1f","type":"BasicTicker"}},"id":"0c07e97e-8b66-4b05-acf0-d298e742d1a5","type":"Grid"},{"attributes":{"formatter":{"id":"af35b329-59a8-4a4a-ae30-ac020eeff091","type":"BasicTickFormatter"},"plot":{"id":"630457fa-f659-45a7-a7f9-86a949ec0c5e","type":"Plot"},"ticker":{"id":"63380004-0256-44ba-86e0-b1d22b5b56c7","type":"BasicTicker"}},"id":"741642d9-87df-4166-931d-e9adb3bd9e14","type":"LinearAxis"},{"attributes":{},"id":"af35b329-59a8-4a4a-ae30-ac020eeff091","type":"BasicTickFormatter"},{"attributes":{"angle":{"units":"rad","value":0.3},"text_color":{"value":"#96deb3"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c817ea82-80b4-4467-9eb3-5f232e9a6f37","type":"Text"}],"root_ids":["630457fa-f659-45a7-a7f9-86a949ec0c5e"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"06bb8c6a-82ad-425f-b7d1-1446bdf644cf","elementid":"97e9d5de-a081-4456-90ab-5504ff6fa69d","modelid":"630457fa-f659-45a7-a7f9-86a949ec0c5e"}];
                
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
