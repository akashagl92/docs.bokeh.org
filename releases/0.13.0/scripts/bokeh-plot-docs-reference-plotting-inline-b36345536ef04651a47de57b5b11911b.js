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
      };var element = document.getElementById("254d9ae6-0a64-4476-ab98-e2341e0f1602");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '254d9ae6-0a64-4476-ab98-e2341e0f1602' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"16c6cf8e-0988-4a3c-89af-11816b5d687a":{"roots":{"references":[{"attributes":{"line_color":{"value":"#FB8072"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f4bd5269-e6dd-4d1f-95e2-f9355b070ea2","type":"Step"},{"attributes":{},"id":"279fae51-d422-4a1b-8dea-10275d22c394","type":"SaveTool"},{"attributes":{"formatter":{"id":"260ed8ff-d15f-4584-b560-f6746c52be2d","type":"BasicTickFormatter"},"plot":{"id":"1049de2f-209b-4c0b-ab64-4b68178767e0","subtype":"Figure","type":"Plot"},"ticker":{"id":"18e787e3-fd78-40df-be18-957a49f69048","type":"BasicTicker"}},"id":"ee770000-61c6-4d14-b209-88a96bced03b","type":"LinearAxis"},{"attributes":{},"id":"1fd068d2-7b9e-45df-b263-42dda52ec353","type":"ResetTool"},{"attributes":{"callback":null},"id":"7d85aec6-62c4-495b-afcf-7f521b470ed0","type":"DataRange1d"},{"attributes":{},"id":"7893b9a8-62e2-42a2-a3a8-65b8a43035cc","type":"HelpTool"},{"attributes":{},"id":"6245e2e7-b116-4265-83fd-28c25cd44843","type":"LinearScale"},{"attributes":{},"id":"260ed8ff-d15f-4584-b560-f6746c52be2d","type":"BasicTickFormatter"},{"attributes":{},"id":"91c0f7ea-045b-470c-9b37-1798cdc2ce85","type":"LinearScale"},{"attributes":{"plot":{"id":"1049de2f-209b-4c0b-ab64-4b68178767e0","subtype":"Figure","type":"Plot"},"ticker":{"id":"18e787e3-fd78-40df-be18-957a49f69048","type":"BasicTicker"}},"id":"1f8f71f7-4791-4d3d-9f35-047af3965b69","type":"Grid"},{"attributes":{},"id":"c62e129a-e118-4ed7-9586-a0fe30bdf73c","type":"Selection"},{"attributes":{"formatter":{"id":"ac7ced14-8090-4994-8fe8-94842b455875","type":"BasicTickFormatter"},"plot":{"id":"1049de2f-209b-4c0b-ab64-4b68178767e0","subtype":"Figure","type":"Plot"},"ticker":{"id":"a021fb40-c56c-4c59-8c12-ff0d75d29277","type":"BasicTicker"}},"id":"87b800d8-1f0e-4653-b0b8-badde6a974ed","type":"LinearAxis"},{"attributes":{},"id":"ac7ced14-8090-4994-8fe8-94842b455875","type":"BasicTickFormatter"},{"attributes":{},"id":"a021fb40-c56c-4c59-8c12-ff0d75d29277","type":"BasicTicker"},{"attributes":{},"id":"7d552291-6f5c-4c3f-87ad-cfeea4495361","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"1049de2f-209b-4c0b-ab64-4b68178767e0","subtype":"Figure","type":"Plot"},"ticker":{"id":"a021fb40-c56c-4c59-8c12-ff0d75d29277","type":"BasicTicker"}},"id":"dd6e160e-1ebd-405b-8d1e-e0013b95e36b","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3ecf3b75-52d2-40ee-9092-ca5ef3b00253","type":"Step"},{"attributes":{"plot":null,"text":""},"id":"bec91fc0-1c78-4114-95ab-fd38426ac6f3","type":"Title"},{"attributes":{"data_source":{"id":"960bbbe2-2221-4a00-bd31-b41920fc18d3","type":"ColumnDataSource"},"glyph":{"id":"f4bd5269-e6dd-4d1f-95e2-f9355b070ea2","type":"Step"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3ecf3b75-52d2-40ee-9092-ca5ef3b00253","type":"Step"},"selection_glyph":null,"view":{"id":"58cab0e5-b56a-473a-a3ca-89571057cde1","type":"CDSView"}},"id":"3236ce7a-a898-41f4-9485-5052a9700e8c","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[1,2,3,2,5]},"selected":{"id":"c62e129a-e118-4ed7-9586-a0fe30bdf73c","type":"Selection"},"selection_policy":{"id":"7d552291-6f5c-4c3f-87ad-cfeea4495361","type":"UnionRenderers"}},"id":"960bbbe2-2221-4a00-bd31-b41920fc18d3","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"75acb6fa-0d5b-4d7f-8e20-4819504c1cd6","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"ee770000-61c6-4d14-b209-88a96bced03b","type":"LinearAxis"}],"left":[{"id":"87b800d8-1f0e-4653-b0b8-badde6a974ed","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"ee770000-61c6-4d14-b209-88a96bced03b","type":"LinearAxis"},{"id":"1f8f71f7-4791-4d3d-9f35-047af3965b69","type":"Grid"},{"id":"87b800d8-1f0e-4653-b0b8-badde6a974ed","type":"LinearAxis"},{"id":"dd6e160e-1ebd-405b-8d1e-e0013b95e36b","type":"Grid"},{"id":"75acb6fa-0d5b-4d7f-8e20-4819504c1cd6","type":"BoxAnnotation"},{"id":"3236ce7a-a898-41f4-9485-5052a9700e8c","type":"GlyphRenderer"}],"title":{"id":"bec91fc0-1c78-4114-95ab-fd38426ac6f3","type":"Title"},"toolbar":{"id":"f952e137-6480-4fa3-91f5-57b1e21bb95b","type":"Toolbar"},"x_range":{"id":"4417e42c-468c-4325-bd2f-d0cc5af8f498","type":"DataRange1d"},"x_scale":{"id":"6245e2e7-b116-4265-83fd-28c25cd44843","type":"LinearScale"},"y_range":{"id":"7d85aec6-62c4-495b-afcf-7f521b470ed0","type":"DataRange1d"},"y_scale":{"id":"91c0f7ea-045b-470c-9b37-1798cdc2ce85","type":"LinearScale"}},"id":"1049de2f-209b-4c0b-ab64-4b68178767e0","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"d5b7e4e9-a8ba-40c9-aabe-ff0dc86abc8e","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"d5b7e4e9-a8ba-40c9-aabe-ff0dc86abc8e","type":"PanTool"},{"id":"a65ea2f8-e3cc-4eb2-aec1-863e296791e1","type":"WheelZoomTool"},{"id":"5b93f32a-a78a-4e70-af3b-5ae004d1325d","type":"BoxZoomTool"},{"id":"279fae51-d422-4a1b-8dea-10275d22c394","type":"SaveTool"},{"id":"1fd068d2-7b9e-45df-b263-42dda52ec353","type":"ResetTool"},{"id":"7893b9a8-62e2-42a2-a3a8-65b8a43035cc","type":"HelpTool"}]},"id":"f952e137-6480-4fa3-91f5-57b1e21bb95b","type":"Toolbar"},{"attributes":{"source":{"id":"960bbbe2-2221-4a00-bd31-b41920fc18d3","type":"ColumnDataSource"}},"id":"58cab0e5-b56a-473a-a3ca-89571057cde1","type":"CDSView"},{"attributes":{"callback":null},"id":"4417e42c-468c-4325-bd2f-d0cc5af8f498","type":"DataRange1d"},{"attributes":{},"id":"a65ea2f8-e3cc-4eb2-aec1-863e296791e1","type":"WheelZoomTool"},{"attributes":{},"id":"18e787e3-fd78-40df-be18-957a49f69048","type":"BasicTicker"},{"attributes":{"overlay":{"id":"75acb6fa-0d5b-4d7f-8e20-4819504c1cd6","type":"BoxAnnotation"}},"id":"5b93f32a-a78a-4e70-af3b-5ae004d1325d","type":"BoxZoomTool"}],"root_ids":["1049de2f-209b-4c0b-ab64-4b68178767e0"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"16c6cf8e-0988-4a3c-89af-11816b5d687a","roots":{"1049de2f-209b-4c0b-ab64-4b68178767e0":"254d9ae6-0a64-4476-ab98-e2341e0f1602"}}];
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