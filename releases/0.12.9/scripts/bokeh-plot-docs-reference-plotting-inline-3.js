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
      };var element = document.getElementById("54ae9000-9240-40e9-bd29-b4d7ac6c408c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '54ae9000-9240-40e9-bd29-b4d7ac6c408c' but no matching script tag was found. ")
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
                    var docs_json = {"19303394-5624-48b6-bf93-66da90113c91":{"roots":{"references":[{"attributes":{"callback":null},"id":"e7965e37-6d6c-44c9-94f4-0a12f8f24cdf","type":"DataRange1d"},{"attributes":{"formatter":{"id":"f5a0d9bb-964f-4447-b831-05180c615b3f","type":"BasicTickFormatter"},"plot":{"id":"b9683f6c-5160-4414-b7c4-c25b8c594da9","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ee0f1c8-dd67-40df-b110-dc0411b408e9","type":"BasicTicker"}},"id":"d152a1ad-aeb7-46d3-afbc-c833a125182f","type":"LinearAxis"},{"attributes":{"data_source":{"id":"daabaa46-5fae-4200-9a71-db66d0789ab4","type":"ColumnDataSource"},"glyph":{"id":"8e0c38c0-9ece-4782-8d68-b49184764b31","type":"CircleCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7c80eed3-c575-46ad-ba18-275466bfb1c1","type":"CircleCross"},"selection_glyph":null,"view":{"id":"4f0eb2ed-81d5-451c-871d-c3de8d9bbd67","type":"CDSView"}},"id":"549de7b3-614d-4570-8682-74f549752992","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"b9683f6c-5160-4414-b7c4-c25b8c594da9","subtype":"Figure","type":"Plot"},"ticker":{"id":"146e465e-d6b5-46c2-8da0-6f4714ba5e5b","type":"BasicTicker"}},"id":"dac2ad78-8c24-4ca3-842c-352666d83706","type":"Grid"},{"attributes":{},"id":"cb3e9af7-36c1-4bba-9d3b-35f4bf9f84fe","type":"LinearScale"},{"attributes":{"overlay":{"id":"bbb77203-8117-44ad-a666-e6efd81cfdab","type":"BoxAnnotation"}},"id":"fa66687f-4e92-46b3-aaea-731b2912cfcb","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"b9683f6c-5160-4414-b7c4-c25b8c594da9","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ee0f1c8-dd67-40df-b110-dc0411b408e9","type":"BasicTicker"}},"id":"63cb2e71-e453-4e28-852b-a09c4969fc73","type":"Grid"},{"attributes":{},"id":"8ee0f1c8-dd67-40df-b110-dc0411b408e9","type":"BasicTicker"},{"attributes":{},"id":"948cd7a3-bc1f-4258-9ec4-abc90e465c92","type":"ResetTool"},{"attributes":{"formatter":{"id":"e2ba1b94-29a3-4bcb-9c7c-fd66089d2111","type":"BasicTickFormatter"},"plot":{"id":"b9683f6c-5160-4414-b7c4-c25b8c594da9","subtype":"Figure","type":"Plot"},"ticker":{"id":"146e465e-d6b5-46c2-8da0-6f4714ba5e5b","type":"BasicTicker"}},"id":"9bf0859d-6383-424e-8d1a-ed58cd45990d","type":"LinearAxis"},{"attributes":{"callback":null},"id":"ea2cae8e-01e3-4b32-aa62-5a9ba029382e","type":"DataRange1d"},{"attributes":{},"id":"60ecdc10-f676-4e40-be58-30f64931b5b7","type":"LinearScale"},{"attributes":{},"id":"e606bf99-e655-4310-9981-53c90260a921","type":"HelpTool"},{"attributes":{"plot":null,"text":""},"id":"f9c3921e-3336-4b21-870f-6f3628c9c660","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"bbb77203-8117-44ad-a666-e6efd81cfdab","type":"BoxAnnotation"},{"attributes":{},"id":"2a1c0228-be4a-4b73-85b0-29914ddcf5e9","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"7c80eed3-c575-46ad-ba18-275466bfb1c1","type":"CircleCross"},{"attributes":{},"id":"f5a0d9bb-964f-4447-b831-05180c615b3f","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8a459f7a-897e-4056-9e39-f13a1dcd0035","type":"PanTool"},{"id":"50451418-d26b-40a6-ba55-e3973d79d695","type":"WheelZoomTool"},{"id":"fa66687f-4e92-46b3-aaea-731b2912cfcb","type":"BoxZoomTool"},{"id":"2a1c0228-be4a-4b73-85b0-29914ddcf5e9","type":"SaveTool"},{"id":"948cd7a3-bc1f-4258-9ec4-abc90e465c92","type":"ResetTool"},{"id":"e606bf99-e655-4310-9981-53c90260a921","type":"HelpTool"}]},"id":"1c799f81-098b-41c0-8f71-13e253de55a4","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#FB8072"},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"8e0c38c0-9ece-4782-8d68-b49184764b31","type":"CircleCross"},{"attributes":{},"id":"8a459f7a-897e-4056-9e39-f13a1dcd0035","type":"PanTool"},{"attributes":{},"id":"e2ba1b94-29a3-4bcb-9c7c-fd66089d2111","type":"BasicTickFormatter"},{"attributes":{},"id":"146e465e-d6b5-46c2-8da0-6f4714ba5e5b","type":"BasicTicker"},{"attributes":{"below":[{"id":"9bf0859d-6383-424e-8d1a-ed58cd45990d","type":"LinearAxis"}],"left":[{"id":"d152a1ad-aeb7-46d3-afbc-c833a125182f","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"9bf0859d-6383-424e-8d1a-ed58cd45990d","type":"LinearAxis"},{"id":"dac2ad78-8c24-4ca3-842c-352666d83706","type":"Grid"},{"id":"d152a1ad-aeb7-46d3-afbc-c833a125182f","type":"LinearAxis"},{"id":"63cb2e71-e453-4e28-852b-a09c4969fc73","type":"Grid"},{"id":"bbb77203-8117-44ad-a666-e6efd81cfdab","type":"BoxAnnotation"},{"id":"549de7b3-614d-4570-8682-74f549752992","type":"GlyphRenderer"}],"title":{"id":"f9c3921e-3336-4b21-870f-6f3628c9c660","type":"Title"},"toolbar":{"id":"1c799f81-098b-41c0-8f71-13e253de55a4","type":"Toolbar"},"x_range":{"id":"e7965e37-6d6c-44c9-94f4-0a12f8f24cdf","type":"DataRange1d"},"x_scale":{"id":"60ecdc10-f676-4e40-be58-30f64931b5b7","type":"LinearScale"},"y_range":{"id":"ea2cae8e-01e3-4b32-aa62-5a9ba029382e","type":"DataRange1d"},"y_scale":{"id":"cb3e9af7-36c1-4bba-9d3b-35f4bf9f84fe","type":"LinearScale"}},"id":"b9683f6c-5160-4414-b7c4-c25b8c594da9","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[4,5,6]}},"id":"daabaa46-5fae-4200-9a71-db66d0789ab4","type":"ColumnDataSource"},{"attributes":{},"id":"50451418-d26b-40a6-ba55-e3973d79d695","type":"WheelZoomTool"},{"attributes":{"source":{"id":"daabaa46-5fae-4200-9a71-db66d0789ab4","type":"ColumnDataSource"}},"id":"4f0eb2ed-81d5-451c-871d-c3de8d9bbd67","type":"CDSView"}],"root_ids":["b9683f6c-5160-4414-b7c4-c25b8c594da9"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"19303394-5624-48b6-bf93-66da90113c91","elementid":"54ae9000-9240-40e9-bd29-b4d7ac6c408c","modelid":"b9683f6c-5160-4414-b7c4-c25b8c594da9"}];
                
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
