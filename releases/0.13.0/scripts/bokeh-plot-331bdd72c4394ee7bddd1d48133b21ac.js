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
      };var element = document.getElementById("7b4fe8e5-b9d6-4a57-91d1-1931cd1ca775");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7b4fe8e5-b9d6-4a57-91d1-1931cd1ca775' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"8d29c949-8421-48b6-9e76-871bfcec5f4f":{"roots":{"references":[{"attributes":{"below":[{"id":"c326e7a1-6796-4f54-af40-eaa81aafbe5a","type":"LinearAxis"}],"left":[{"id":"93b332d5-8279-4a3c-b52e-5551f0a22304","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"c326e7a1-6796-4f54-af40-eaa81aafbe5a","type":"LinearAxis"},{"id":"d828df91-75cd-4bd1-8e12-e139d054681b","type":"Grid"},{"id":"93b332d5-8279-4a3c-b52e-5551f0a22304","type":"LinearAxis"},{"id":"ed923239-00ee-4548-a812-b532af558db7","type":"Grid"},{"id":"05e65a1e-4119-412f-bd4c-446b823a35fc","type":"BoxAnnotation"},{"id":"760354a0-e584-4360-b802-5c4c6ffc89f5","type":"GlyphRenderer"}],"title":{"id":"1a8c88b4-0c70-429a-a11c-1f2ce660a996","type":"Title"},"toolbar":{"id":"230d2e98-36e7-47d6-af6f-3d352e801da7","type":"Toolbar"},"x_range":{"id":"c139e6e0-a70f-4f86-9fd3-1a66158046b3","type":"DataRange1d"},"x_scale":{"id":"63a69191-beb1-404b-815d-8845c777a856","type":"LinearScale"},"y_range":{"id":"f94cff08-042a-4bba-95bc-e03f63fe8211","type":"DataRange1d"},"y_scale":{"id":"b6741417-151d-4e1d-b1ca-5bed7f6a1b0c","type":"LinearScale"}},"id":"46830e5f-4cc7-4894-8f46-49a09918dfd9","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"1a8c88b4-0c70-429a-a11c-1f2ce660a996","type":"Title"},{"attributes":{"callback":null},"id":"c139e6e0-a70f-4f86-9fd3-1a66158046b3","type":"DataRange1d"},{"attributes":{"overlay":{"id":"05e65a1e-4119-412f-bd4c-446b823a35fc","type":"BoxAnnotation"}},"id":"27a9fbf0-1f03-443a-acf3-d3c64c659213","type":"BoxZoomTool"},{"attributes":{},"id":"edad7626-63a8-4d21-8538-331f2e91e5db","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"f94cff08-042a-4bba-95bc-e03f63fe8211","type":"DataRange1d"},{"attributes":{},"id":"7d9d5485-ea8d-49eb-ab99-6934477cef64","type":"Selection"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"46830e5f-4cc7-4894-8f46-49a09918dfd9","subtype":"Figure","type":"Plot"},"ticker":{"id":"375cb596-4990-4fde-87d0-02bfa7c7698e","type":"BasicTicker"}},"id":"d828df91-75cd-4bd1-8e12-e139d054681b","type":"Grid"},{"attributes":{"formatter":{"id":"a3894dd6-cbee-421a-af8e-8c8404c7c700","type":"BasicTickFormatter"},"plot":{"id":"46830e5f-4cc7-4894-8f46-49a09918dfd9","subtype":"Figure","type":"Plot"},"ticker":{"id":"375cb596-4990-4fde-87d0-02bfa7c7698e","type":"BasicTicker"}},"id":"c326e7a1-6796-4f54-af40-eaa81aafbe5a","type":"LinearAxis"},{"attributes":{},"id":"b6741417-151d-4e1d-b1ca-5bed7f6a1b0c","type":"LinearScale"},{"attributes":{},"id":"6f59be4b-b606-4552-af15-5da20084fe13","type":"UnionRenderers"},{"attributes":{},"id":"1f1e36e8-d933-4928-82a9-ae75a4ebbd8d","type":"WheelZoomTool"},{"attributes":{},"id":"28c5fe9c-ea84-4e70-83dd-d8c38e1fea16","type":"SaveTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"7d9d5485-ea8d-49eb-ab99-6934477cef64","type":"Selection"},"selection_policy":{"id":"6f59be4b-b606-4552-af15-5da20084fe13","type":"UnionRenderers"}},"id":"23c201fc-8a21-4be6-8711-3f30f8a129b6","type":"ColumnDataSource"},{"attributes":{},"id":"63a69191-beb1-404b-815d-8845c777a856","type":"LinearScale"},{"attributes":{},"id":"79fc3c65-d57b-4fec-a20b-966ed0ec2ade","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"dddc3464-b20f-495f-80f2-775c36547622","type":"Circle"},{"attributes":{},"id":"46554a9f-4687-4820-aeeb-d2776bdcf32a","type":"PanTool"},{"attributes":{},"id":"0193abf0-1eda-4b23-8187-72381b19b4f3","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"05e65a1e-4119-412f-bd4c-446b823a35fc","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"23c201fc-8a21-4be6-8711-3f30f8a129b6","type":"ColumnDataSource"},"glyph":{"id":"dddc3464-b20f-495f-80f2-775c36547622","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ffd62705-6324-47d4-88d2-f92cc587ba0f","type":"Circle"},"selection_glyph":null,"view":{"id":"028c630b-63af-48de-b86b-40c26a156639","type":"CDSView"}},"id":"760354a0-e584-4360-b802-5c4c6ffc89f5","type":"GlyphRenderer"},{"attributes":{},"id":"a3894dd6-cbee-421a-af8e-8c8404c7c700","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"46554a9f-4687-4820-aeeb-d2776bdcf32a","type":"PanTool"},{"id":"1f1e36e8-d933-4928-82a9-ae75a4ebbd8d","type":"WheelZoomTool"},{"id":"27a9fbf0-1f03-443a-acf3-d3c64c659213","type":"BoxZoomTool"},{"id":"28c5fe9c-ea84-4e70-83dd-d8c38e1fea16","type":"SaveTool"},{"id":"0193abf0-1eda-4b23-8187-72381b19b4f3","type":"ResetTool"},{"id":"79fc3c65-d57b-4fec-a20b-966ed0ec2ade","type":"HelpTool"}]},"id":"230d2e98-36e7-47d6-af6f-3d352e801da7","type":"Toolbar"},{"attributes":{},"id":"cb79553c-fc30-4ba8-a16c-83944e1b8a98","type":"BasicTicker"},{"attributes":{"source":{"id":"23c201fc-8a21-4be6-8711-3f30f8a129b6","type":"ColumnDataSource"}},"id":"028c630b-63af-48de-b86b-40c26a156639","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ffd62705-6324-47d4-88d2-f92cc587ba0f","type":"Circle"},{"attributes":{},"id":"375cb596-4990-4fde-87d0-02bfa7c7698e","type":"BasicTicker"},{"attributes":{"formatter":{"id":"edad7626-63a8-4d21-8538-331f2e91e5db","type":"BasicTickFormatter"},"plot":{"id":"46830e5f-4cc7-4894-8f46-49a09918dfd9","subtype":"Figure","type":"Plot"},"ticker":{"id":"cb79553c-fc30-4ba8-a16c-83944e1b8a98","type":"BasicTicker"}},"id":"93b332d5-8279-4a3c-b52e-5551f0a22304","type":"LinearAxis"},{"attributes":{"band_fill_alpha":{"value":0.1},"band_fill_color":{"value":"navy"},"dimension":1,"plot":{"id":"46830e5f-4cc7-4894-8f46-49a09918dfd9","subtype":"Figure","type":"Plot"},"ticker":{"id":"cb79553c-fc30-4ba8-a16c-83944e1b8a98","type":"BasicTicker"}},"id":"ed923239-00ee-4548-a812-b532af558db7","type":"Grid"}],"root_ids":["46830e5f-4cc7-4894-8f46-49a09918dfd9"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"8d29c949-8421-48b6-9e76-871bfcec5f4f","roots":{"46830e5f-4cc7-4894-8f46-49a09918dfd9":"7b4fe8e5-b9d6-4a57-91d1-1931cd1ca775"}}];
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