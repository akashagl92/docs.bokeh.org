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
      };var element = document.getElementById("9de5f699-0ac6-49f1-b7d0-4a45c0bb31d7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9de5f699-0ac6-49f1-b7d0-4a45c0bb31d7' but no matching script tag was found. ")
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
                    var docs_json = {"ed43ef3c-c721-43b2-be3b-2880692cb1bd":{"roots":{"references":[{"attributes":{"data_source":{"id":"0b330a6f-b3af-4b50-97a1-54be32e20bcf","type":"ColumnDataSource"},"glyph":{"id":"53b8c6bc-f593-4034-a54a-c0f4a8b1336a","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6bb95bcc-ea87-4b6c-a29c-0eb804658bb4","type":"VBar"},"selection_glyph":null,"view":{"id":"5f034766-b9d0-4089-a9f3-4623057f8224","type":"CDSView"}},"id":"b1a430a9-6da3-4962-800b-eab91a780350","type":"GlyphRenderer"},{"attributes":{},"id":"0e5bfb8a-cbba-4610-bc9b-201cd3eeee16","type":"BasicTicker"},{"attributes":{},"id":"0249b8cc-24e8-46cb-9382-8b2dd55341fb","type":"ResetTool"},{"attributes":{},"id":"d7f42830-edee-457b-859b-a8b216613bb3","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"eee71ad8-3a41-4b4f-8942-61ed512c769a","type":"PanTool"},{"id":"2d965f8e-85d3-46bb-8204-ce7c21090724","type":"WheelZoomTool"},{"id":"4e76f4a9-a8e2-4804-babf-29dbc01867ad","type":"BoxZoomTool"},{"id":"8c562c9d-41c8-4275-9b93-09dc01f48856","type":"SaveTool"},{"id":"0249b8cc-24e8-46cb-9382-8b2dd55341fb","type":"ResetTool"},{"id":"781a5d80-cec4-4c3c-9485-0629f1db5530","type":"HelpTool"}]},"id":"a06a9488-c279-4739-a05c-53d4b8fe73a1","type":"Toolbar"},{"attributes":{},"id":"8c562c9d-41c8-4275-9b93-09dc01f48856","type":"SaveTool"},{"attributes":{"callback":null},"id":"f3ff571e-2245-455e-8267-29d146340dad","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"6bb95bcc-ea87-4b6c-a29c-0eb804658bb4","type":"VBar"},{"attributes":{},"id":"eb47c6f4-c89f-4330-93bc-e5049d5e7164","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"392ba7b2-7045-440e-826c-c44824ef101f","type":"LinearAxis"}],"left":[{"id":"0282288c-16bf-47aa-bfc6-b41f309bf144","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"392ba7b2-7045-440e-826c-c44824ef101f","type":"LinearAxis"},{"id":"056d4e31-7243-4de9-8606-6d63587d5b89","type":"Grid"},{"id":"0282288c-16bf-47aa-bfc6-b41f309bf144","type":"LinearAxis"},{"id":"1f9bbb5d-0a2a-47d0-9805-b029974c908c","type":"Grid"},{"id":"a4fdbebe-1de5-402b-87cb-2f0753a74d36","type":"BoxAnnotation"},{"id":"b1a430a9-6da3-4962-800b-eab91a780350","type":"GlyphRenderer"}],"title":{"id":"7fb77a57-15d5-428b-842c-b381d07d45ff","type":"Title"},"toolbar":{"id":"a06a9488-c279-4739-a05c-53d4b8fe73a1","type":"Toolbar"},"x_range":{"id":"f3ff571e-2245-455e-8267-29d146340dad","type":"DataRange1d"},"x_scale":{"id":"f9586a69-c2b4-47b8-a1dd-806b1b5d3fda","type":"LinearScale"},"y_range":{"id":"65141243-a5a4-4878-b36a-ed6b2199da62","type":"DataRange1d"},"y_scale":{"id":"cf084972-c81a-479a-a54f-8278ec95dbe7","type":"LinearScale"}},"id":"d66efcb5-a194-419b-99e0-1cc5c3635c28","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[1.2,2.5,3.7],"x":[1,2,3]}},"id":"0b330a6f-b3af-4b50-97a1-54be32e20bcf","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"d66efcb5-a194-419b-99e0-1cc5c3635c28","subtype":"Figure","type":"Plot"},"ticker":{"id":"8059a075-a95e-4ee5-a936-5ea6f1ab082a","type":"BasicTicker"}},"id":"1f9bbb5d-0a2a-47d0-9805-b029974c908c","type":"Grid"},{"attributes":{"formatter":{"id":"eb47c6f4-c89f-4330-93bc-e5049d5e7164","type":"BasicTickFormatter"},"plot":{"id":"d66efcb5-a194-419b-99e0-1cc5c3635c28","subtype":"Figure","type":"Plot"},"ticker":{"id":"8059a075-a95e-4ee5-a936-5ea6f1ab082a","type":"BasicTicker"}},"id":"0282288c-16bf-47aa-bfc6-b41f309bf144","type":"LinearAxis"},{"attributes":{},"id":"8059a075-a95e-4ee5-a936-5ea6f1ab082a","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"53b8c6bc-f593-4034-a54a-c0f4a8b1336a","type":"VBar"},{"attributes":{},"id":"f9586a69-c2b4-47b8-a1dd-806b1b5d3fda","type":"LinearScale"},{"attributes":{"formatter":{"id":"d7f42830-edee-457b-859b-a8b216613bb3","type":"BasicTickFormatter"},"plot":{"id":"d66efcb5-a194-419b-99e0-1cc5c3635c28","subtype":"Figure","type":"Plot"},"ticker":{"id":"0e5bfb8a-cbba-4610-bc9b-201cd3eeee16","type":"BasicTicker"}},"id":"392ba7b2-7045-440e-826c-c44824ef101f","type":"LinearAxis"},{"attributes":{"overlay":{"id":"a4fdbebe-1de5-402b-87cb-2f0753a74d36","type":"BoxAnnotation"}},"id":"4e76f4a9-a8e2-4804-babf-29dbc01867ad","type":"BoxZoomTool"},{"attributes":{},"id":"781a5d80-cec4-4c3c-9485-0629f1db5530","type":"HelpTool"},{"attributes":{},"id":"2d965f8e-85d3-46bb-8204-ce7c21090724","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"65141243-a5a4-4878-b36a-ed6b2199da62","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a4fdbebe-1de5-402b-87cb-2f0753a74d36","type":"BoxAnnotation"},{"attributes":{},"id":"cf084972-c81a-479a-a54f-8278ec95dbe7","type":"LinearScale"},{"attributes":{"source":{"id":"0b330a6f-b3af-4b50-97a1-54be32e20bcf","type":"ColumnDataSource"}},"id":"5f034766-b9d0-4089-a9f3-4623057f8224","type":"CDSView"},{"attributes":{},"id":"eee71ad8-3a41-4b4f-8942-61ed512c769a","type":"PanTool"},{"attributes":{"plot":{"id":"d66efcb5-a194-419b-99e0-1cc5c3635c28","subtype":"Figure","type":"Plot"},"ticker":{"id":"0e5bfb8a-cbba-4610-bc9b-201cd3eeee16","type":"BasicTicker"}},"id":"056d4e31-7243-4de9-8606-6d63587d5b89","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"7fb77a57-15d5-428b-842c-b381d07d45ff","type":"Title"}],"root_ids":["d66efcb5-a194-419b-99e0-1cc5c3635c28"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"ed43ef3c-c721-43b2-be3b-2880692cb1bd","elementid":"9de5f699-0ac6-49f1-b7d0-4a45c0bb31d7","modelid":"d66efcb5-a194-419b-99e0-1cc5c3635c28"}];
                
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
