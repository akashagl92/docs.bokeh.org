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
      };var element = document.getElementById("3f81c431-e458-4698-bb80-314d60ec5fc2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3f81c431-e458-4698-bb80-314d60ec5fc2' but no matching script tag was found. ")
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
                    var docs_json = {"cc611877-a937-4484-843a-2963273a67e9":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a252f8cc-4367-44b6-8623-c7fbd4e60286","type":"Circle"},{"attributes":{"source":{"id":"34d100ca-f57e-41ea-a038-c8a6cb51d741","type":"ColumnDataSource"}},"id":"0a99d94d-1e0a-42aa-985d-2e61131b0992","type":"CDSView"},{"attributes":{},"id":"77703e3c-a224-4455-8450-077f267a2d45","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"34d100ca-f57e-41ea-a038-c8a6cb51d741","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"34d100ca-f57e-41ea-a038-c8a6cb51d741","type":"ColumnDataSource"},"glyph":{"id":"051d4a71-0928-43ca-a8a3-45dc031ad183","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a252f8cc-4367-44b6-8623-c7fbd4e60286","type":"Circle"},"selection_glyph":null,"view":{"id":"0a99d94d-1e0a-42aa-985d-2e61131b0992","type":"CDSView"}},"id":"fed0d3ab-4b53-46e2-b595-fea8469a1e0e","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"5ca520dd-ee2e-4729-8c90-523266311b91","type":"LinearAxis"}],"left":[{"id":"5a3304fe-91ee-4530-8e8b-5e6581c2e117","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"5ca520dd-ee2e-4729-8c90-523266311b91","type":"LinearAxis"},{"id":"9bdd9bb8-0b1e-424c-87d5-0a14e5dd3603","type":"Grid"},{"id":"5a3304fe-91ee-4530-8e8b-5e6581c2e117","type":"LinearAxis"},{"id":"3239b0f1-3ca7-4e25-8013-3e6a5e1470ac","type":"Grid"},{"id":"c239081f-f1c3-4267-aee0-e2c382df6848","type":"BoxAnnotation"},{"id":"fed0d3ab-4b53-46e2-b595-fea8469a1e0e","type":"GlyphRenderer"}],"title":{"id":"73ef6954-ab1b-43a9-b450-be3cac5c1c6a","type":"Title"},"toolbar":{"id":"b9d31c8e-8d3d-4001-bc24-bb96e60c840d","type":"Toolbar"},"x_range":{"id":"9c90f093-984b-48f9-8576-7c0f4183d557","type":"DataRange1d"},"x_scale":{"id":"51ad54f7-629b-4792-8c96-f6996e6b422d","type":"LinearScale"},"y_range":{"id":"39950551-7207-4d9e-bcaa-dc0ab961a858","type":"DataRange1d"},"y_scale":{"id":"31a319fe-15c7-4538-b43e-b9637ac72134","type":"LinearScale"}},"id":"4b213d68-9352-4fcb-a1ac-5252b2e241c8","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"5bad13d5-f619-43a8-828f-a4cd4675a4a3","type":"PanTool"},{"attributes":{},"id":"5000690f-dc57-44a0-945d-7db5d6e60bfc","type":"ResetTool"},{"attributes":{"callback":null},"id":"9c90f093-984b-48f9-8576-7c0f4183d557","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"73ef6954-ab1b-43a9-b450-be3cac5c1c6a","type":"Title"},{"attributes":{},"id":"51ad54f7-629b-4792-8c96-f6996e6b422d","type":"LinearScale"},{"attributes":{"overlay":{"id":"c239081f-f1c3-4267-aee0-e2c382df6848","type":"BoxAnnotation"}},"id":"d26d242d-52fe-4d0d-859a-5cca39807154","type":"BoxZoomTool"},{"attributes":{},"id":"8c53c877-48b7-4ba8-8da5-a64fd81285bc","type":"WheelZoomTool"},{"attributes":{},"id":"a8f38ebc-0121-4a45-8cdf-9ee97a1d4f87","type":"HelpTool"},{"attributes":{},"id":"31a319fe-15c7-4538-b43e-b9637ac72134","type":"LinearScale"},{"attributes":{"formatter":{"id":"a4fdceeb-d3b6-4d90-9d0c-44b58b8bedf9","type":"BasicTickFormatter"},"major_tick_line_color":{"value":"firebrick"},"major_tick_line_width":{"value":3},"major_tick_out":10,"minor_tick_in":-3,"minor_tick_line_color":{"value":"orange"},"minor_tick_out":8,"plot":{"id":"4b213d68-9352-4fcb-a1ac-5252b2e241c8","subtype":"Figure","type":"Plot"},"ticker":{"id":"12467f3e-10b2-49da-9521-4c0104f87277","type":"BasicTicker"}},"id":"5ca520dd-ee2e-4729-8c90-523266311b91","type":"LinearAxis"},{"attributes":{"callback":null},"id":"39950551-7207-4d9e-bcaa-dc0ab961a858","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"4b213d68-9352-4fcb-a1ac-5252b2e241c8","subtype":"Figure","type":"Plot"},"ticker":{"id":"77703e3c-a224-4455-8450-077f267a2d45","type":"BasicTicker"}},"id":"3239b0f1-3ca7-4e25-8013-3e6a5e1470ac","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5bad13d5-f619-43a8-828f-a4cd4675a4a3","type":"PanTool"},{"id":"8c53c877-48b7-4ba8-8da5-a64fd81285bc","type":"WheelZoomTool"},{"id":"d26d242d-52fe-4d0d-859a-5cca39807154","type":"BoxZoomTool"},{"id":"b9bb55fb-ad33-4e55-93e5-79b30f32ed40","type":"SaveTool"},{"id":"5000690f-dc57-44a0-945d-7db5d6e60bfc","type":"ResetTool"},{"id":"a8f38ebc-0121-4a45-8cdf-9ee97a1d4f87","type":"HelpTool"}]},"id":"b9d31c8e-8d3d-4001-bc24-bb96e60c840d","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c239081f-f1c3-4267-aee0-e2c382df6848","type":"BoxAnnotation"},{"attributes":{},"id":"12467f3e-10b2-49da-9521-4c0104f87277","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"051d4a71-0928-43ca-a8a3-45dc031ad183","type":"Circle"},{"attributes":{},"id":"ba0c1528-3288-412a-b57c-f49b68687bd9","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"ba0c1528-3288-412a-b57c-f49b68687bd9","type":"BasicTickFormatter"},"major_tick_out":10,"minor_tick_in":-3,"minor_tick_line_color":{"value":null},"minor_tick_out":8,"plot":{"id":"4b213d68-9352-4fcb-a1ac-5252b2e241c8","subtype":"Figure","type":"Plot"},"ticker":{"id":"77703e3c-a224-4455-8450-077f267a2d45","type":"BasicTicker"}},"id":"5a3304fe-91ee-4530-8e8b-5e6581c2e117","type":"LinearAxis"},{"attributes":{"plot":{"id":"4b213d68-9352-4fcb-a1ac-5252b2e241c8","subtype":"Figure","type":"Plot"},"ticker":{"id":"12467f3e-10b2-49da-9521-4c0104f87277","type":"BasicTicker"}},"id":"9bdd9bb8-0b1e-424c-87d5-0a14e5dd3603","type":"Grid"},{"attributes":{},"id":"b9bb55fb-ad33-4e55-93e5-79b30f32ed40","type":"SaveTool"},{"attributes":{},"id":"a4fdceeb-d3b6-4d90-9d0c-44b58b8bedf9","type":"BasicTickFormatter"}],"root_ids":["4b213d68-9352-4fcb-a1ac-5252b2e241c8"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"cc611877-a937-4484-843a-2963273a67e9","elementid":"3f81c431-e458-4698-bb80-314d60ec5fc2","modelid":"4b213d68-9352-4fcb-a1ac-5252b2e241c8"}];
                
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
