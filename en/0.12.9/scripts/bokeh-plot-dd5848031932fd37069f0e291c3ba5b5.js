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
      };var element = document.getElementById("9be9a2b3-ceae-41ba-95a4-a71fee4600c2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9be9a2b3-ceae-41ba-95a4-a71fee4600c2' but no matching script tag was found. ")
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
                    var docs_json = {"dd24b527-7e94-42f2-884a-6e2aa77025cb":{"roots":{"references":[{"attributes":{"formatter":{"id":"bef893f3-c32e-4530-ade7-42fdf6a7201d","type":"BasicTickFormatter"},"plot":{"id":"09c9ace3-a645-4549-9f7e-7afbb7fa2835","subtype":"Figure","type":"Plot"},"ticker":{"id":"eb61040b-0b91-4ce9-b439-d9730b5326c1","type":"BasicTicker"}},"id":"b21ef02a-64d6-4363-8ed6-ecba20558afb","type":"LinearAxis"},{"attributes":{"formatter":{"id":"f35d613f-cc9d-4399-8585-04cbe336ddb1","type":"BasicTickFormatter"},"plot":{"id":"09c9ace3-a645-4549-9f7e-7afbb7fa2835","subtype":"Figure","type":"Plot"},"ticker":{"id":"edf1334d-74eb-4d1e-acbc-72c2f416395d","type":"BasicTicker"}},"id":"fe7f0f8a-e040-43ab-9d29-c8b8df22ac2c","type":"LinearAxis"},{"attributes":{},"id":"26953e29-a51f-4127-b84e-9d4730633234","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"bead2c1b-d17f-47da-8223-22e4020cd1c2","type":"Circle"},{"attributes":{"data_source":{"id":"9a4617e8-9b71-4bd8-904b-6428f6ae4755","type":"ColumnDataSource"},"glyph":{"id":"3ffc0017-2922-41ad-a29b-6c283ab8013c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"bead2c1b-d17f-47da-8223-22e4020cd1c2","type":"Circle"},"selection_glyph":null,"view":{"id":"a0406da4-41fd-4725-b15c-5a09af0fb085","type":"CDSView"}},"id":"e083fb4f-caf7-4b58-b947-a1bbef7154bb","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"0a6df657-7a23-4632-aa69-e8e4394f063c","type":"DataRange1d"},{"attributes":{"below":[{"id":"fe7f0f8a-e040-43ab-9d29-c8b8df22ac2c","type":"LinearAxis"}],"left":[{"id":"b21ef02a-64d6-4363-8ed6-ecba20558afb","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"fe7f0f8a-e040-43ab-9d29-c8b8df22ac2c","type":"LinearAxis"},{"id":"ae9f9094-517a-44bd-82b5-f5b6963b0b12","type":"Grid"},{"id":"b21ef02a-64d6-4363-8ed6-ecba20558afb","type":"LinearAxis"},{"id":"748df966-e2a3-493f-b9af-bbfd7de6eeef","type":"Grid"},{"id":"adcad064-8b5f-4635-8b71-97ef531aff9c","type":"BoxAnnotation"},{"id":"e083fb4f-caf7-4b58-b947-a1bbef7154bb","type":"GlyphRenderer"}],"title":{"id":"4c8699d8-3c22-49c8-9ac2-be72a132de99","type":"Title"},"toolbar":{"id":"3f3617f1-2ccc-4172-8f60-00acbe99790c","type":"Toolbar"},"x_range":{"id":"45193dd0-20cb-490b-bd3a-c46fdb493715","type":"DataRange1d"},"x_scale":{"id":"7ab1fa3a-3ed6-42d2-84a2-a7494240ef42","type":"LinearScale"},"y_range":{"id":"0a6df657-7a23-4632-aa69-e8e4394f063c","type":"DataRange1d"},"y_scale":{"id":"5d53a91f-bb0a-4a5f-b360-f6ccdabcfc2b","type":"LinearScale"}},"id":"09c9ace3-a645-4549-9f7e-7afbb7fa2835","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"f35d613f-cc9d-4399-8585-04cbe336ddb1","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"09c9ace3-a645-4549-9f7e-7afbb7fa2835","subtype":"Figure","type":"Plot"},"ticker":{"id":"eb61040b-0b91-4ce9-b439-d9730b5326c1","type":"BasicTicker"}},"id":"748df966-e2a3-493f-b9af-bbfd7de6eeef","type":"Grid"},{"attributes":{"plot":null,"text":"Basic Title"},"id":"4c8699d8-3c22-49c8-9ac2-be72a132de99","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3ffc0017-2922-41ad-a29b-6c283ab8013c","type":"Circle"},{"attributes":{},"id":"dd986b43-7ec5-46a8-a25f-4082a23330f8","type":"WheelZoomTool"},{"attributes":{},"id":"edf1334d-74eb-4d1e-acbc-72c2f416395d","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"adcad064-8b5f-4635-8b71-97ef531aff9c","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2],"y":[3,4]}},"id":"9a4617e8-9b71-4bd8-904b-6428f6ae4755","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"45193dd0-20cb-490b-bd3a-c46fdb493715","type":"DataRange1d"},{"attributes":{"source":{"id":"9a4617e8-9b71-4bd8-904b-6428f6ae4755","type":"ColumnDataSource"}},"id":"a0406da4-41fd-4725-b15c-5a09af0fb085","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"26953e29-a51f-4127-b84e-9d4730633234","type":"PanTool"},{"id":"dd986b43-7ec5-46a8-a25f-4082a23330f8","type":"WheelZoomTool"},{"id":"1e072635-68f8-459a-8b34-2bce999c8eea","type":"BoxZoomTool"},{"id":"02d4111e-611a-4f32-95be-f0d661039a8a","type":"SaveTool"},{"id":"c4327b6a-8086-4a85-8068-a08a86f632f3","type":"ResetTool"},{"id":"671ad479-6710-4ae5-bdce-926801b917b5","type":"HelpTool"}]},"id":"3f3617f1-2ccc-4172-8f60-00acbe99790c","type":"Toolbar"},{"attributes":{},"id":"eb61040b-0b91-4ce9-b439-d9730b5326c1","type":"BasicTicker"},{"attributes":{},"id":"c4327b6a-8086-4a85-8068-a08a86f632f3","type":"ResetTool"},{"attributes":{"overlay":{"id":"adcad064-8b5f-4635-8b71-97ef531aff9c","type":"BoxAnnotation"}},"id":"1e072635-68f8-459a-8b34-2bce999c8eea","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"09c9ace3-a645-4549-9f7e-7afbb7fa2835","subtype":"Figure","type":"Plot"},"ticker":{"id":"edf1334d-74eb-4d1e-acbc-72c2f416395d","type":"BasicTicker"}},"id":"ae9f9094-517a-44bd-82b5-f5b6963b0b12","type":"Grid"},{"attributes":{},"id":"7ab1fa3a-3ed6-42d2-84a2-a7494240ef42","type":"LinearScale"},{"attributes":{},"id":"02d4111e-611a-4f32-95be-f0d661039a8a","type":"SaveTool"},{"attributes":{},"id":"5d53a91f-bb0a-4a5f-b360-f6ccdabcfc2b","type":"LinearScale"},{"attributes":{},"id":"bef893f3-c32e-4530-ade7-42fdf6a7201d","type":"BasicTickFormatter"},{"attributes":{},"id":"671ad479-6710-4ae5-bdce-926801b917b5","type":"HelpTool"}],"root_ids":["09c9ace3-a645-4549-9f7e-7afbb7fa2835"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"dd24b527-7e94-42f2-884a-6e2aa77025cb","elementid":"9be9a2b3-ceae-41ba-95a4-a71fee4600c2","modelid":"09c9ace3-a645-4549-9f7e-7afbb7fa2835"}];
                
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
