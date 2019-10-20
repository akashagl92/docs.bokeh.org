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
      };var element = document.getElementById("aa78d7f2-d71f-4dcd-b87e-a62dd076e7d9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'aa78d7f2-d71f-4dcd-b87e-a62dd076e7d9' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"6421682f-29d9-405c-a511-7e741b38a556":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#CAB2D6"},"line_color":{"value":"#CAB2D6"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"1aab6107-2fcd-42d3-9b2e-21dcc0a1fc1b","type":"VBar"},{"attributes":{"callback":null},"id":"0974bf3d-f55c-4807-875d-3e11a1039bab","type":"DataRange1d"},{"attributes":{"below":[{"id":"55a33979-52b5-4070-9411-425f27f4137c","type":"LinearAxis"}],"left":[{"id":"dcba034b-da5c-4e5e-976c-7cf09b6f3dce","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"55a33979-52b5-4070-9411-425f27f4137c","type":"LinearAxis"},{"id":"1ab7e5bc-9347-4c23-81f8-d758371ffb3d","type":"Grid"},{"id":"dcba034b-da5c-4e5e-976c-7cf09b6f3dce","type":"LinearAxis"},{"id":"596563a4-4012-41b5-a719-5a1f4f67207c","type":"Grid"},{"id":"d03128fe-57c9-4231-b6a4-13fa8cadd54c","type":"BoxAnnotation"},{"id":"1d238b81-5300-4624-85e9-df50c17e2562","type":"GlyphRenderer"}],"title":{"id":"8fbf194e-23da-4410-b367-9338e08d36f4","type":"Title"},"toolbar":{"id":"5b717a03-369a-4c7b-9099-936ee9121b74","type":"Toolbar"},"x_range":{"id":"7e52f1ca-92e9-4182-a20c-722cdf078b0c","type":"DataRange1d"},"x_scale":{"id":"5221b6e6-3683-4454-97e6-88453c19de12","type":"LinearScale"},"y_range":{"id":"0974bf3d-f55c-4807-875d-3e11a1039bab","type":"DataRange1d"},"y_scale":{"id":"830370a8-952c-4048-8579-afce599f73c4","type":"LinearScale"}},"id":"e2a577b0-0003-4a71-998c-87c9499f06ef","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"5221b6e6-3683-4454-97e6-88453c19de12","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"a56170a2-89c8-4357-89de-fa561b317a48","type":"PanTool"},{"id":"86f3555e-8e97-491d-8cf7-04e8ea8a1f1b","type":"WheelZoomTool"},{"id":"8d76b48b-5847-4f45-8b8c-10f2875d9819","type":"BoxZoomTool"},{"id":"78d6a651-9930-4b34-b780-af39a323b5a6","type":"SaveTool"},{"id":"33d5c063-c64c-466d-9a21-e87f21276203","type":"ResetTool"},{"id":"50685c4a-9f44-4b66-8d0b-6ed7071c325b","type":"HelpTool"}]},"id":"5b717a03-369a-4c7b-9099-936ee9121b74","type":"Toolbar"},{"attributes":{"plot":{"id":"e2a577b0-0003-4a71-998c-87c9499f06ef","subtype":"Figure","type":"Plot"},"ticker":{"id":"5a9bd807-a1f2-431a-99f8-e1d1f98b5e46","type":"BasicTicker"}},"id":"1ab7e5bc-9347-4c23-81f8-d758371ffb3d","type":"Grid"},{"attributes":{},"id":"8e1d8e87-ae90-4cb5-9939-639a828f97a9","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d03128fe-57c9-4231-b6a4-13fa8cadd54c","type":"BoxAnnotation"},{"attributes":{},"id":"830370a8-952c-4048-8579-afce599f73c4","type":"LinearScale"},{"attributes":{},"id":"86f3555e-8e97-491d-8cf7-04e8ea8a1f1b","type":"WheelZoomTool"},{"attributes":{},"id":"5a9bd807-a1f2-431a-99f8-e1d1f98b5e46","type":"BasicTicker"},{"attributes":{"formatter":{"id":"fd9f3a3d-69bc-448f-8737-480b1e38ab06","type":"BasicTickFormatter"},"plot":{"id":"e2a577b0-0003-4a71-998c-87c9499f06ef","subtype":"Figure","type":"Plot"},"ticker":{"id":"8e1d8e87-ae90-4cb5-9939-639a828f97a9","type":"BasicTicker"}},"id":"dcba034b-da5c-4e5e-976c-7cf09b6f3dce","type":"LinearAxis"},{"attributes":{"formatter":{"id":"a094550c-99f0-4019-ab6b-567ec3d4af41","type":"BasicTickFormatter"},"plot":{"id":"e2a577b0-0003-4a71-998c-87c9499f06ef","subtype":"Figure","type":"Plot"},"ticker":{"id":"5a9bd807-a1f2-431a-99f8-e1d1f98b5e46","type":"BasicTicker"}},"id":"55a33979-52b5-4070-9411-425f27f4137c","type":"LinearAxis"},{"attributes":{"overlay":{"id":"d03128fe-57c9-4231-b6a4-13fa8cadd54c","type":"BoxAnnotation"}},"id":"8d76b48b-5847-4f45-8b8c-10f2875d9819","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"7e52f1ca-92e9-4182-a20c-722cdf078b0c","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"e2a577b0-0003-4a71-998c-87c9499f06ef","subtype":"Figure","type":"Plot"},"ticker":{"id":"8e1d8e87-ae90-4cb5-9939-639a828f97a9","type":"BasicTicker"}},"id":"596563a4-4012-41b5-a719-5a1f4f67207c","type":"Grid"},{"attributes":{},"id":"78d6a651-9930-4b34-b780-af39a323b5a6","type":"SaveTool"},{"attributes":{},"id":"33d5c063-c64c-466d-9a21-e87f21276203","type":"ResetTool"},{"attributes":{"callback":null,"data":{"top":[1,2,3],"x":[1,2,3]},"selected":{"id":"ab0ce22b-7373-4d41-be59-4f07768ac636","type":"Selection"},"selection_policy":{"id":"0f6082b2-1ef1-4e4e-851f-c5899f6f00e8","type":"UnionRenderers"}},"id":"a32667f6-1c16-43ca-8de7-65aa98edce61","type":"ColumnDataSource"},{"attributes":{},"id":"50685c4a-9f44-4b66-8d0b-6ed7071c325b","type":"HelpTool"},{"attributes":{},"id":"fd9f3a3d-69bc-448f-8737-480b1e38ab06","type":"BasicTickFormatter"},{"attributes":{},"id":"a56170a2-89c8-4357-89de-fa561b317a48","type":"PanTool"},{"attributes":{},"id":"ab0ce22b-7373-4d41-be59-4f07768ac636","type":"Selection"},{"attributes":{"plot":null,"text":""},"id":"8fbf194e-23da-4410-b367-9338e08d36f4","type":"Title"},{"attributes":{},"id":"a094550c-99f0-4019-ab6b-567ec3d4af41","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"47fdade8-00af-4e9f-bda5-37e70fcd7e77","type":"VBar"},{"attributes":{"source":{"id":"a32667f6-1c16-43ca-8de7-65aa98edce61","type":"ColumnDataSource"}},"id":"c45a70fe-703a-4a63-8d4f-cf79de54aa02","type":"CDSView"},{"attributes":{},"id":"0f6082b2-1ef1-4e4e-851f-c5899f6f00e8","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"a32667f6-1c16-43ca-8de7-65aa98edce61","type":"ColumnDataSource"},"glyph":{"id":"1aab6107-2fcd-42d3-9b2e-21dcc0a1fc1b","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"47fdade8-00af-4e9f-bda5-37e70fcd7e77","type":"VBar"},"selection_glyph":null,"view":{"id":"c45a70fe-703a-4a63-8d4f-cf79de54aa02","type":"CDSView"}},"id":"1d238b81-5300-4624-85e9-df50c17e2562","type":"GlyphRenderer"}],"root_ids":["e2a577b0-0003-4a71-998c-87c9499f06ef"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"6421682f-29d9-405c-a511-7e741b38a556","roots":{"e2a577b0-0003-4a71-998c-87c9499f06ef":"aa78d7f2-d71f-4dcd-b87e-a62dd076e7d9"}}];
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