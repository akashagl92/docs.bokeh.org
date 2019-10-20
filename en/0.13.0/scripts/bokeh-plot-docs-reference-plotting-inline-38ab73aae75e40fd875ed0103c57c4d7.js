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
      };var element = document.getElementById("22935566-f7f9-4d4b-bff0-823d5d3438a3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '22935566-f7f9-4d4b-bff0-823d5d3438a3' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"7cfdba91-f4d8-4ab1-94fc-64676e282e04":{"roots":{"references":[{"attributes":{},"id":"00de12c7-0e34-49a2-95ef-20d0c024eb3c","type":"SaveTool"},{"attributes":{},"id":"e33df2cb-ca76-4f5d-ad75-0ff4c7a99b92","type":"ResetTool"},{"attributes":{},"id":"63adabcd-7ad2-412b-81bd-0799d374d22d","type":"LinearScale"},{"attributes":{},"id":"2aec4c8b-866c-43b8-9517-19471ec0af67","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"63284852-8e85-4ab5-b673-ceaeb2c9c628","type":"Square"},{"attributes":{},"id":"9fe434a2-2f34-45b0-9cca-3e90683ceb8b","type":"BasicTickFormatter"},{"attributes":{},"id":"46f9be67-208c-4c99-8c15-059910e9ad3b","type":"LinearScale"},{"attributes":{"callback":null,"data":{"size":[10,20,30],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"8e74d279-985c-4468-ad79-78151889bf03","type":"Selection"},"selection_policy":{"id":"e0073371-53ee-403d-ae9e-255797873eca","type":"UnionRenderers"}},"id":"71469944-a193-4432-9b8c-dde7eb620fad","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"ddd87148-7d4a-40a1-a17f-4a83795067a2","subtype":"Figure","type":"Plot"},"ticker":{"id":"f90175fc-a6bf-40fa-9d55-4466f23e7039","type":"BasicTicker"}},"id":"1d261fa7-bb81-4376-9bfe-270717d30c57","type":"Grid"},{"attributes":{},"id":"8e74d279-985c-4468-ad79-78151889bf03","type":"Selection"},{"attributes":{"formatter":{"id":"9fe434a2-2f34-45b0-9cca-3e90683ceb8b","type":"BasicTickFormatter"},"plot":{"id":"ddd87148-7d4a-40a1-a17f-4a83795067a2","subtype":"Figure","type":"Plot"},"ticker":{"id":"f90175fc-a6bf-40fa-9d55-4466f23e7039","type":"BasicTicker"}},"id":"0bb6692e-a5f9-4d26-ba8e-b320f52d0706","type":"LinearAxis"},{"attributes":{},"id":"34e477d9-4a08-45ff-95e4-a628edc987ed","type":"BasicTickFormatter"},{"attributes":{},"id":"f90175fc-a6bf-40fa-9d55-4466f23e7039","type":"BasicTicker"},{"attributes":{"formatter":{"id":"34e477d9-4a08-45ff-95e4-a628edc987ed","type":"BasicTickFormatter"},"plot":{"id":"ddd87148-7d4a-40a1-a17f-4a83795067a2","subtype":"Figure","type":"Plot"},"ticker":{"id":"5584901a-b05b-4c19-94c2-589f39084d45","type":"BasicTicker"}},"id":"e5fab888-2c01-4fcf-b3c6-24ad1dd20120","type":"LinearAxis"},{"attributes":{},"id":"e0073371-53ee-403d-ae9e-255797873eca","type":"UnionRenderers"},{"attributes":{},"id":"5584901a-b05b-4c19-94c2-589f39084d45","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"ddd87148-7d4a-40a1-a17f-4a83795067a2","subtype":"Figure","type":"Plot"},"ticker":{"id":"5584901a-b05b-4c19-94c2-589f39084d45","type":"BasicTicker"}},"id":"296c89b8-bbb3-4107-88f6-3b73b8044725","type":"Grid"},{"attributes":{"data_source":{"id":"71469944-a193-4432-9b8c-dde7eb620fad","type":"ColumnDataSource"},"glyph":{"id":"50d9772d-7b98-4389-9cc5-3f35b6fbe5ef","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"63284852-8e85-4ab5-b673-ceaeb2c9c628","type":"Square"},"selection_glyph":null,"view":{"id":"ea690857-c491-433c-bd83-fbd15ebc088c","type":"CDSView"}},"id":"89cb63e5-efbe-4313-b1ef-2c0cc8d040b2","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#74ADD1"},"line_color":{"value":"#74ADD1"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"50d9772d-7b98-4389-9cc5-3f35b6fbe5ef","type":"Square"},{"attributes":{"plot":null,"text":""},"id":"71d95a30-1c65-4584-9411-4dcfe8c20e82","type":"Title"},{"attributes":{"callback":null},"id":"85799ce9-2957-4f51-a735-86d64c60c3b2","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"81c17334-2ffd-47da-a3dc-f265776d6a02","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"0bb6692e-a5f9-4d26-ba8e-b320f52d0706","type":"LinearAxis"}],"left":[{"id":"e5fab888-2c01-4fcf-b3c6-24ad1dd20120","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"0bb6692e-a5f9-4d26-ba8e-b320f52d0706","type":"LinearAxis"},{"id":"1d261fa7-bb81-4376-9bfe-270717d30c57","type":"Grid"},{"id":"e5fab888-2c01-4fcf-b3c6-24ad1dd20120","type":"LinearAxis"},{"id":"296c89b8-bbb3-4107-88f6-3b73b8044725","type":"Grid"},{"id":"81c17334-2ffd-47da-a3dc-f265776d6a02","type":"BoxAnnotation"},{"id":"89cb63e5-efbe-4313-b1ef-2c0cc8d040b2","type":"GlyphRenderer"}],"title":{"id":"71d95a30-1c65-4584-9411-4dcfe8c20e82","type":"Title"},"toolbar":{"id":"f3c812d1-6b6a-48d0-940f-f369f4ae5f1a","type":"Toolbar"},"x_range":{"id":"85799ce9-2957-4f51-a735-86d64c60c3b2","type":"DataRange1d"},"x_scale":{"id":"63adabcd-7ad2-412b-81bd-0799d374d22d","type":"LinearScale"},"y_range":{"id":"3a52bb5e-8b29-4ecb-87a0-2a152c3e5f25","type":"DataRange1d"},"y_scale":{"id":"46f9be67-208c-4c99-8c15-059910e9ad3b","type":"LinearScale"}},"id":"ddd87148-7d4a-40a1-a17f-4a83795067a2","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"e16823ff-299f-435f-9c1d-9af93f98a6d8","type":"PanTool"},{"attributes":{"source":{"id":"71469944-a193-4432-9b8c-dde7eb620fad","type":"ColumnDataSource"}},"id":"ea690857-c491-433c-bd83-fbd15ebc088c","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"e16823ff-299f-435f-9c1d-9af93f98a6d8","type":"PanTool"},{"id":"3c378bd5-7e57-478a-8d65-ebd2beee170e","type":"WheelZoomTool"},{"id":"1347ec02-f4ce-4f3c-9131-92652b8fa51f","type":"BoxZoomTool"},{"id":"00de12c7-0e34-49a2-95ef-20d0c024eb3c","type":"SaveTool"},{"id":"e33df2cb-ca76-4f5d-ad75-0ff4c7a99b92","type":"ResetTool"},{"id":"2aec4c8b-866c-43b8-9517-19471ec0af67","type":"HelpTool"}]},"id":"f3c812d1-6b6a-48d0-940f-f369f4ae5f1a","type":"Toolbar"},{"attributes":{},"id":"3c378bd5-7e57-478a-8d65-ebd2beee170e","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"81c17334-2ffd-47da-a3dc-f265776d6a02","type":"BoxAnnotation"}},"id":"1347ec02-f4ce-4f3c-9131-92652b8fa51f","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"3a52bb5e-8b29-4ecb-87a0-2a152c3e5f25","type":"DataRange1d"}],"root_ids":["ddd87148-7d4a-40a1-a17f-4a83795067a2"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"7cfdba91-f4d8-4ab1-94fc-64676e282e04","roots":{"ddd87148-7d4a-40a1-a17f-4a83795067a2":"22935566-f7f9-4d4b-bff0-823d5d3438a3"}}];
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