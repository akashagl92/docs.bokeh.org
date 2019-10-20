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
      };var element = document.getElementById("3a3a10b4-6cf0-43af-900e-09753b578eaf");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3a3a10b4-6cf0-43af-900e-09753b578eaf' but no matching script tag was found. ")
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
                    var docs_json = {"419a5db6-47be-41ec-aa4a-f3b8666835bc":{"roots":{"references":[{"attributes":{},"id":"68778cfc-1f00-4b1a-8a1a-d1e61b7e7bc1","type":"SaveTool"},{"attributes":{},"id":"2b267233-6845-4ff5-ab63-11b4fac6d529","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"379ea8b7-d2d5-458a-9237-a649d0c4cf95","type":"PanTool"},{"id":"1d2df560-9603-4205-ab83-9497d1d1097d","type":"WheelZoomTool"},{"id":"ea310ab3-ce87-4cb4-99e1-2d67ae76fd20","type":"BoxZoomTool"},{"id":"68778cfc-1f00-4b1a-8a1a-d1e61b7e7bc1","type":"SaveTool"},{"id":"72e16215-1717-4d53-853b-fffe4d8db2f7","type":"ResetTool"},{"id":"1f1b9131-eca1-47e4-aacf-2dab6610a601","type":"HelpTool"}]},"id":"89f45b0d-4d50-4d65-8a0d-0ca30aaf5b2e","type":"Toolbar"},{"attributes":{},"id":"379ea8b7-d2d5-458a-9237-a649d0c4cf95","type":"PanTool"},{"attributes":{"data_source":{"id":"57d18f67-20bd-4180-85c6-a49a27cd4644","type":"ColumnDataSource"},"glyph":{"id":"e1936cc4-d163-49ce-8247-50f6b94f60a6","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7f93e456-b906-4eb4-94df-4d6e0ff87745","type":"Circle"},"selection_glyph":null,"view":{"id":"71f7f2c2-7a20-44cb-a977-76c9642fb378","type":"CDSView"}},"id":"510451a0-1e25-4b18-af78-1540a7e8c630","type":"GlyphRenderer"},{"attributes":{},"id":"fe746748-367d-4546-a908-7c844cc78590","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"3f7d0c68-67a5-47a6-a0f0-22b481c55284","type":"FuncTickFormatter"},"plot":{"id":"a73ebad4-e768-4fd4-9107-fc57c4246efa","subtype":"Figure","type":"Plot"},"ticker":{"id":"29ae790e-d046-4da7-8cc2-69fcc2d82e8c","type":"BasicTicker"}},"id":"5508cd5e-5ac5-4c34-a372-8706a2f9f9d8","type":"LinearAxis"},{"attributes":{},"id":"72e16215-1717-4d53-853b-fffe4d8db2f7","type":"ResetTool"},{"attributes":{},"id":"8e726343-bad3-40f6-a973-3d1c76902c6f","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7a61d5fd-6260-4ff0-bb98-91b3dd9e4774","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"7a61d5fd-6260-4ff0-bb98-91b3dd9e4774","type":"BoxAnnotation"}},"id":"ea310ab3-ce87-4cb4-99e1-2d67ae76fd20","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"a73ebad4-e768-4fd4-9107-fc57c4246efa","subtype":"Figure","type":"Plot"},"ticker":{"id":"29ae790e-d046-4da7-8cc2-69fcc2d82e8c","type":"BasicTicker"}},"id":"7ba2b518-dad9-4684-9623-ecc28ef8fea5","type":"Grid"},{"attributes":{},"id":"f2d295e6-bfb6-44e0-af41-6c11bba45dcd","type":"LinearScale"},{"attributes":{"formatter":{"id":"fe746748-367d-4546-a908-7c844cc78590","type":"BasicTickFormatter"},"plot":{"id":"a73ebad4-e768-4fd4-9107-fc57c4246efa","subtype":"Figure","type":"Plot"},"ticker":{"id":"8e726343-bad3-40f6-a973-3d1c76902c6f","type":"BasicTicker"}},"id":"3fe322a4-5c41-4655-ba7b-58e54bebb567","type":"LinearAxis"},{"attributes":{},"id":"1f1b9131-eca1-47e4-aacf-2dab6610a601","type":"HelpTool"},{"attributes":{"code":"\n    return Math.floor(tick) + \" + \" + (tick % 1).toFixed(2)\n"},"id":"3f7d0c68-67a5-47a6-a0f0-22b481c55284","type":"FuncTickFormatter"},{"attributes":{},"id":"1d2df560-9603-4205-ab83-9497d1d1097d","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"25907091-98c3-4842-a766-4eaf0eb2859a","type":"DataRange1d"},{"attributes":{"plot":{"id":"a73ebad4-e768-4fd4-9107-fc57c4246efa","subtype":"Figure","type":"Plot"},"ticker":{"id":"8e726343-bad3-40f6-a973-3d1c76902c6f","type":"BasicTicker"}},"id":"d79b38f4-abc0-46cc-acef-03c5668ad173","type":"Grid"},{"attributes":{"below":[{"id":"3fe322a4-5c41-4655-ba7b-58e54bebb567","type":"LinearAxis"}],"left":[{"id":"5508cd5e-5ac5-4c34-a372-8706a2f9f9d8","type":"LinearAxis"}],"plot_height":500,"plot_width":500,"renderers":[{"id":"3fe322a4-5c41-4655-ba7b-58e54bebb567","type":"LinearAxis"},{"id":"d79b38f4-abc0-46cc-acef-03c5668ad173","type":"Grid"},{"id":"5508cd5e-5ac5-4c34-a372-8706a2f9f9d8","type":"LinearAxis"},{"id":"7ba2b518-dad9-4684-9623-ecc28ef8fea5","type":"Grid"},{"id":"7a61d5fd-6260-4ff0-bb98-91b3dd9e4774","type":"BoxAnnotation"},{"id":"510451a0-1e25-4b18-af78-1540a7e8c630","type":"GlyphRenderer"}],"title":{"id":"7d953c47-863c-4131-936a-78259e5a7f9c","type":"Title"},"toolbar":{"id":"89f45b0d-4d50-4d65-8a0d-0ca30aaf5b2e","type":"Toolbar"},"x_range":{"id":"25907091-98c3-4842-a766-4eaf0eb2859a","type":"DataRange1d"},"x_scale":{"id":"2b267233-6845-4ff5-ab63-11b4fac6d529","type":"LinearScale"},"y_range":{"id":"eb92bdea-fad9-4293-b06c-9ddd72d951c9","type":"DataRange1d"},"y_scale":{"id":"f2d295e6-bfb6-44e0-af41-6c11bba45dcd","type":"LinearScale"}},"id":"a73ebad4-e768-4fd4-9107-fc57c4246efa","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"7d953c47-863c-4131-936a-78259e5a7f9c","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"7f93e456-b906-4eb4-94df-4d6e0ff87745","type":"Circle"},{"attributes":{},"id":"29ae790e-d046-4da7-8cc2-69fcc2d82e8c","type":"BasicTicker"},{"attributes":{"source":{"id":"57d18f67-20bd-4180-85c6-a49a27cd4644","type":"ColumnDataSource"}},"id":"71f7f2c2-7a20-44cb-a977-76c9642fb378","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,2,4,6,8,10],"y":[6,2,4,10,8,0]}},"id":"57d18f67-20bd-4180-85c6-a49a27cd4644","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"eb92bdea-fad9-4293-b06c-9ddd72d951c9","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"e1936cc4-d163-49ce-8247-50f6b94f60a6","type":"Circle"}],"root_ids":["a73ebad4-e768-4fd4-9107-fc57c4246efa"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"419a5db6-47be-41ec-aa4a-f3b8666835bc","elementid":"3a3a10b4-6cf0-43af-900e-09753b578eaf","modelid":"a73ebad4-e768-4fd4-9107-fc57c4246efa"}];
                
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
