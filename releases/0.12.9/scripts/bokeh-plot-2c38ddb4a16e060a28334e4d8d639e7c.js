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
      };var element = document.getElementById("71a2dbef-6dac-4f88-a5f2-c433f62a5038");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '71a2dbef-6dac-4f88-a5f2-c433f62a5038' but no matching script tag was found. ")
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
                    var docs_json = {"892e19f4-58b8-447d-93a0-fb747afec765":{"roots":{"references":[{"attributes":{"callback":null},"id":"f52e861c-473c-4791-9094-dfda9258aca8","type":"DataRange1d"},{"attributes":{"background_fill_alpha":{"value":0.5},"background_fill_color":{"value":"beige"},"below":[{"id":"af3b2fa4-bfc9-4c18-b9f6-6c5575cf60b1","type":"LinearAxis"}],"left":[{"id":"2d5b24a8-148e-42dd-9f83-4775a0e476c0","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"af3b2fa4-bfc9-4c18-b9f6-6c5575cf60b1","type":"LinearAxis"},{"id":"56791904-954d-43ba-b1a6-7315d4616662","type":"Grid"},{"id":"2d5b24a8-148e-42dd-9f83-4775a0e476c0","type":"LinearAxis"},{"id":"20ad14cb-bae2-4bd1-b2e9-e9d9488a48d9","type":"Grid"},{"id":"46fbb6f4-fa13-4a04-b328-00e1e142ade6","type":"BoxAnnotation"},{"id":"3294c85c-40f3-497d-b6b8-8f29e453f814","type":"GlyphRenderer"}],"title":{"id":"9d5cc932-fba8-404b-a5f4-e139e97492a0","type":"Title"},"toolbar":{"id":"d6b3d6e7-e419-4af6-8991-4bb0c66135dc","type":"Toolbar"},"x_range":{"id":"f52e861c-473c-4791-9094-dfda9258aca8","type":"DataRange1d"},"x_scale":{"id":"22012dc7-4717-48c8-bc58-8a854d23cdaf","type":"LinearScale"},"y_range":{"id":"b057d503-495b-4f46-8f37-54cd142a2828","type":"DataRange1d"},"y_scale":{"id":"09ccc472-a6c7-42a0-9f5f-d42f93c4f847","type":"LinearScale"}},"id":"e59c557e-ec48-4931-af93-a030bfb032cc","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"2bd770ca-b774-413b-839a-78a766096912","type":"Circle"},{"attributes":{"overlay":{"id":"46fbb6f4-fa13-4a04-b328-00e1e142ade6","type":"BoxAnnotation"}},"id":"2e8f1320-1289-45bc-9c7f-108d6573ed54","type":"BoxZoomTool"},{"attributes":{},"id":"38d0741f-584c-409c-ae20-33ae7cf6f512","type":"BasicTicker"},{"attributes":{"formatter":{"id":"96f23794-a0db-411d-86ad-dbb2de76cf66","type":"BasicTickFormatter"},"plot":{"id":"e59c557e-ec48-4931-af93-a030bfb032cc","subtype":"Figure","type":"Plot"},"ticker":{"id":"38d0741f-584c-409c-ae20-33ae7cf6f512","type":"BasicTicker"}},"id":"af3b2fa4-bfc9-4c18-b9f6-6c5575cf60b1","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"e59c557e-ec48-4931-af93-a030bfb032cc","subtype":"Figure","type":"Plot"},"ticker":{"id":"44548aa5-8338-4ee6-9074-e972df96b170","type":"BasicTicker"}},"id":"20ad14cb-bae2-4bd1-b2e9-e9d9488a48d9","type":"Grid"},{"attributes":{"source":{"id":"a038df40-edef-4edd-b895-8caf2bfbea59","type":"ColumnDataSource"}},"id":"1f61c433-8dbb-4fbb-a39b-cd98b7c61bb9","type":"CDSView"},{"attributes":{},"id":"3f365b96-e978-49dc-8db9-73dd8413422f","type":"WheelZoomTool"},{"attributes":{},"id":"09ccc472-a6c7-42a0-9f5f-d42f93c4f847","type":"LinearScale"},{"attributes":{},"id":"22012dc7-4717-48c8-bc58-8a854d23cdaf","type":"LinearScale"},{"attributes":{},"id":"96f23794-a0db-411d-86ad-dbb2de76cf66","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"a038df40-edef-4edd-b895-8caf2bfbea59","type":"ColumnDataSource"},"glyph":{"id":"2bd770ca-b774-413b-839a-78a766096912","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ef84ed7e-9afb-4242-b62a-3cd6d69334e5","type":"Circle"},"selection_glyph":null,"view":{"id":"1f61c433-8dbb-4fbb-a39b-cd98b7c61bb9","type":"CDSView"}},"id":"3294c85c-40f3-497d-b6b8-8f29e453f814","type":"GlyphRenderer"},{"attributes":{},"id":"a1d26a84-496c-40e5-a50f-618449256c73","type":"PanTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"a038df40-edef-4edd-b895-8caf2bfbea59","type":"ColumnDataSource"},{"attributes":{},"id":"05ad147f-81a6-453c-b713-bc3457258b17","type":"ResetTool"},{"attributes":{"formatter":{"id":"d3c953df-b33e-4d9f-9c23-8b93603247ce","type":"BasicTickFormatter"},"plot":{"id":"e59c557e-ec48-4931-af93-a030bfb032cc","subtype":"Figure","type":"Plot"},"ticker":{"id":"44548aa5-8338-4ee6-9074-e972df96b170","type":"BasicTicker"}},"id":"2d5b24a8-148e-42dd-9f83-4775a0e476c0","type":"LinearAxis"},{"attributes":{},"id":"75f21f99-5afb-45e5-ab6a-89634c8e2d08","type":"SaveTool"},{"attributes":{},"id":"d3c953df-b33e-4d9f-9c23-8b93603247ce","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ef84ed7e-9afb-4242-b62a-3cd6d69334e5","type":"Circle"},{"attributes":{},"id":"44548aa5-8338-4ee6-9074-e972df96b170","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"46fbb6f4-fa13-4a04-b328-00e1e142ade6","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":""},"id":"9d5cc932-fba8-404b-a5f4-e139e97492a0","type":"Title"},{"attributes":{},"id":"f4163de5-ee77-4530-8f66-e0c00983e9cc","type":"HelpTool"},{"attributes":{"callback":null},"id":"b057d503-495b-4f46-8f37-54cd142a2828","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a1d26a84-496c-40e5-a50f-618449256c73","type":"PanTool"},{"id":"3f365b96-e978-49dc-8db9-73dd8413422f","type":"WheelZoomTool"},{"id":"2e8f1320-1289-45bc-9c7f-108d6573ed54","type":"BoxZoomTool"},{"id":"75f21f99-5afb-45e5-ab6a-89634c8e2d08","type":"SaveTool"},{"id":"05ad147f-81a6-453c-b713-bc3457258b17","type":"ResetTool"},{"id":"f4163de5-ee77-4530-8f66-e0c00983e9cc","type":"HelpTool"}]},"id":"d6b3d6e7-e419-4af6-8991-4bb0c66135dc","type":"Toolbar"},{"attributes":{"plot":{"id":"e59c557e-ec48-4931-af93-a030bfb032cc","subtype":"Figure","type":"Plot"},"ticker":{"id":"38d0741f-584c-409c-ae20-33ae7cf6f512","type":"BasicTicker"}},"id":"56791904-954d-43ba-b1a6-7315d4616662","type":"Grid"}],"root_ids":["e59c557e-ec48-4931-af93-a030bfb032cc"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"892e19f4-58b8-447d-93a0-fb747afec765","elementid":"71a2dbef-6dac-4f88-a5f2-c433f62a5038","modelid":"e59c557e-ec48-4931-af93-a030bfb032cc"}];
                
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
