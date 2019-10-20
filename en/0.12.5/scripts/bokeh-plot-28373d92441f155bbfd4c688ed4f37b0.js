(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("ba6556bd-88e5-4a7d-8e69-bd7b22524146");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ba6556bd-88e5-4a7d-8e69-bd7b22524146' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"0727391f-d6fd-432c-adf1-76daecdd8914":{"roots":{"references":[{"attributes":{"data_source":{"id":"0c48178f-6f20-41a8-899b-f3becacc83ac","type":"ColumnDataSource"},"glyph":{"id":"6ff7bc01-612d-42d1-84d2-c382f9c2a03a","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"94ffd1e3-1150-40cd-8086-86af98b64f8e","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"8ec67f59-310b-4fbf-b9ff-764ae0409fc9","subtype":"Chart","type":"Plot"}},"id":"385898d3-60a0-4573-aa7d-d9d3730be71a","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"8ec67f59-310b-4fbf-b9ff-764ae0409fc9","subtype":"Chart","type":"Plot"},"ticker":{"id":"1f5fb346-619b-48e0-af77-b98e42a2e690","type":"BasicTicker"}},"id":"3ecd2a55-50d7-4d3f-8ccd-92a1f9f373b6","type":"Grid"},{"attributes":{"plot":{"id":"8ec67f59-310b-4fbf-b9ff-764ae0409fc9","subtype":"Chart","type":"Plot"}},"id":"7a36d57c-e3ea-4c00-bc50-a224a9cf72aa","type":"SaveTool"},{"attributes":{"plot":null,"text":"Total MPG by CYL"},"id":"a09f7030-e202-4b72-8795-6c5b79db96b9","type":"Title"},{"attributes":{},"id":"1f5fb346-619b-48e0-af77-b98e42a2e690","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fd344e32-92f6-41b1-86fa-9538f13fd4b8","type":"BoxAnnotation"},{"attributes":{"label":{"value":"6"},"renderers":[{"id":"9e6e0412-4d46-4131-aaef-c2b9ecda596d","type":"GlyphRenderer"}]},"id":"8cb0f3d5-732d-4107-bdaf-d9a2166a7840","type":"LegendItem"},{"attributes":{},"id":"3febec4b-c991-4be5-ac31-20db51bce54c","type":"CategoricalTickFormatter"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"256ebe47-c43c-4616-9d91-9930adde2671","type":"Rect"},{"attributes":{"overlay":{"id":"fd344e32-92f6-41b1-86fa-9538f13fd4b8","type":"BoxAnnotation"},"plot":{"id":"8ec67f59-310b-4fbf-b9ff-764ae0409fc9","subtype":"Chart","type":"Plot"}},"id":"085b0e4a-5a98-4c9c-91fc-c64cdc0ef4c5","type":"BoxZoomTool"},{"attributes":{"axis_label":"Sum( Mpg )","formatter":{"id":"04c773a1-630b-45a2-9fef-ec79f642a4d5","type":"BasicTickFormatter"},"plot":{"id":"8ec67f59-310b-4fbf-b9ff-764ae0409fc9","subtype":"Chart","type":"Plot"},"ticker":{"id":"1f5fb346-619b-48e0-af77-b98e42a2e690","type":"BasicTicker"}},"id":"0f820372-63dd-4667-936e-bc95921e74db","type":"LinearAxis"},{"attributes":{"plot":{"id":"8ec67f59-310b-4fbf-b9ff-764ae0409fc9","subtype":"Chart","type":"Plot"}},"id":"61cf5107-185f-4a37-b4d3-2aac100b402e","type":"PanTool"},{"attributes":{"callback":null,"factors":["3","4","5","6","8"]},"id":"ec573a3c-f480-46ac-ab88-7066c2391321","type":"FactorRange"},{"attributes":{"plot":{"id":"8ec67f59-310b-4fbf-b9ff-764ae0409fc9","subtype":"Chart","type":"Plot"}},"id":"59a34f3d-1e88-4925-81e6-aa72f0f356a7","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"2c41fa18-be55-442f-9794-03d50f47cbaf","type":"ColumnDataSource"},"glyph":{"id":"256ebe47-c43c-4616-9d91-9930adde2671","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"3cc75d95-5fcf-49f6-ab18-c64d29157006","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":5}],"color":["#f22c40"],"cyl":[5],"fill_alpha":[0.8],"height":[82.1],"label":[{"cyl":5}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["5"],"y":[41.05]}},"id":"0c48178f-6f20-41a8-899b-f3becacc83ac","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3bc61141-04aa-40b4-a068-dc2ad7df64cb","type":"ColumnDataSource"},"glyph":{"id":"8a6d2af3-2a12-490c-99ba-ad3360c2c345","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"9e6e0412-4d46-4131-aaef-c2b9ecda596d","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":3}],"color":["#f22c40"],"cyl":[3],"fill_alpha":[0.8],"height":[82.2],"label":[{"cyl":3}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["3"],"y":[41.1]}},"id":"b3865123-b8be-4541-ba6d-eee0b8b09813","type":"ColumnDataSource"},{"attributes":{"label":{"value":"3"},"renderers":[{"id":"4a49b679-2536-4c90-8257-2f88fb8447fd","type":"GlyphRenderer"}]},"id":"1bfbafdc-bd6a-48bd-bdf5-3dc5675378ec","type":"LegendItem"},{"attributes":{"items":[{"id":"13f848b3-4665-4e37-bedc-8151192a244a","type":"LegendItem"},{"id":"fcb17b8b-79cc-4b42-81c0-047c9b1f751d","type":"LegendItem"},{"id":"8cb0f3d5-732d-4107-bdaf-d9a2166a7840","type":"LegendItem"},{"id":"1bfbafdc-bd6a-48bd-bdf5-3dc5675378ec","type":"LegendItem"},{"id":"e72cd0ee-2dc9-411e-a911-6c71b929c322","type":"LegendItem"}],"location":"top_left","plot":{"id":"8ec67f59-310b-4fbf-b9ff-764ae0409fc9","subtype":"Chart","type":"Plot"}},"id":"c4421f7c-3324-434f-893b-e69d3adeb28f","type":"Legend"},{"attributes":{"below":[{"id":"bae3b685-d9e0-4d34-af99-85455c82b3c8","type":"CategoricalAxis"}],"css_classes":null,"left":[{"id":"0f820372-63dd-4667-936e-bc95921e74db","type":"LinearAxis"}],"renderers":[{"id":"fd344e32-92f6-41b1-86fa-9538f13fd4b8","type":"BoxAnnotation"},{"id":"3cc75d95-5fcf-49f6-ab18-c64d29157006","type":"GlyphRenderer"},{"id":"0f78ad4f-736a-4540-baf2-ba09e50d1315","type":"GlyphRenderer"},{"id":"9e6e0412-4d46-4131-aaef-c2b9ecda596d","type":"GlyphRenderer"},{"id":"4a49b679-2536-4c90-8257-2f88fb8447fd","type":"GlyphRenderer"},{"id":"94ffd1e3-1150-40cd-8086-86af98b64f8e","type":"GlyphRenderer"},{"id":"c4421f7c-3324-434f-893b-e69d3adeb28f","type":"Legend"},{"id":"bae3b685-d9e0-4d34-af99-85455c82b3c8","type":"CategoricalAxis"},{"id":"0f820372-63dd-4667-936e-bc95921e74db","type":"LinearAxis"},{"id":"3ecd2a55-50d7-4d3f-8ccd-92a1f9f373b6","type":"Grid"}],"title":{"id":"a09f7030-e202-4b72-8795-6c5b79db96b9","type":"Title"},"tool_events":{"id":"98b60b64-bb10-41e3-9441-3f627a441a6c","type":"ToolEvents"},"toolbar":{"id":"2055f1f0-b681-490d-b693-0d2a43b6cdbe","type":"Toolbar"},"x_mapper_type":"auto","x_range":{"id":"ec573a3c-f480-46ac-ab88-7066c2391321","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"648f986c-e1cc-46a5-88b0-4cbcb6c99b2d","type":"Range1d"}},"id":"8ec67f59-310b-4fbf-b9ff-764ae0409fc9","subtype":"Chart","type":"Plot"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7c1707f0-0c42-4415-9ae5-d3ea09de32c2","type":"Rect"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"61cf5107-185f-4a37-b4d3-2aac100b402e","type":"PanTool"},{"id":"59a34f3d-1e88-4925-81e6-aa72f0f356a7","type":"WheelZoomTool"},{"id":"085b0e4a-5a98-4c9c-91fc-c64cdc0ef4c5","type":"BoxZoomTool"},{"id":"7a36d57c-e3ea-4c00-bc50-a224a9cf72aa","type":"SaveTool"},{"id":"385898d3-60a0-4573-aa7d-d9d3730be71a","type":"ResetTool"},{"id":"f513c3d5-2480-49ee-9e9c-ff7550093fb7","type":"HelpTool"}]},"id":"2055f1f0-b681-490d-b693-0d2a43b6cdbe","type":"Toolbar"},{"attributes":{},"id":"04c773a1-630b-45a2-9fef-ec79f642a4d5","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Cyl","formatter":{"id":"3febec4b-c991-4be5-ac31-20db51bce54c","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"8ec67f59-310b-4fbf-b9ff-764ae0409fc9","subtype":"Chart","type":"Plot"},"ticker":{"id":"79e70562-dd4e-4883-9c1e-3462555254ba","type":"CategoricalTicker"}},"id":"bae3b685-d9e0-4d34-af99-85455c82b3c8","type":"CategoricalAxis"},{"attributes":{},"id":"98b60b64-bb10-41e3-9441-3f627a441a6c","type":"ToolEvents"},{"attributes":{"plot":{"id":"8ec67f59-310b-4fbf-b9ff-764ae0409fc9","subtype":"Chart","type":"Plot"}},"id":"f513c3d5-2480-49ee-9e9c-ff7550093fb7","type":"HelpTool"},{"attributes":{"label":{"value":"4"},"renderers":[{"id":"0f78ad4f-736a-4540-baf2-ba09e50d1315","type":"GlyphRenderer"}]},"id":"fcb17b8b-79cc-4b42-81c0-047c9b1f751d","type":"LegendItem"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5cfc0bae-e282-4280-a8e0-d06129dff1fe","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8a6d2af3-2a12-490c-99ba-ad3360c2c345","type":"Rect"},{"attributes":{"label":{"value":"8"},"renderers":[{"id":"3cc75d95-5fcf-49f6-ab18-c64d29157006","type":"GlyphRenderer"}]},"id":"13f848b3-4665-4e37-bedc-8151192a244a","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":4}],"color":["#f22c40"],"cyl":[4],"fill_alpha":[0.8],"height":[5827.5],"label":[{"cyl":4}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["4"],"y":[2913.75]}},"id":"a33bc676-6fc5-4699-bdf5-4e761253117e","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":8}],"color":["#f22c40"],"cyl":[8],"fill_alpha":[0.8],"height":[1541.2],"label":[{"cyl":8}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["8"],"y":[770.6]}},"id":"2c41fa18-be55-442f-9794-03d50f47cbaf","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"a33bc676-6fc5-4699-bdf5-4e761253117e","type":"ColumnDataSource"},"glyph":{"id":"5cfc0bae-e282-4280-a8e0-d06129dff1fe","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"0f78ad4f-736a-4540-baf2-ba09e50d1315","type":"GlyphRenderer"},{"attributes":{"label":{"value":"5"},"renderers":[{"id":"94ffd1e3-1150-40cd-8086-86af98b64f8e","type":"GlyphRenderer"}]},"id":"e72cd0ee-2dc9-411e-a911-6c71b929c322","type":"LegendItem"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6ff7bc01-612d-42d1-84d2-c382f9c2a03a","type":"Rect"},{"attributes":{"data_source":{"id":"b3865123-b8be-4541-ba6d-eee0b8b09813","type":"ColumnDataSource"},"glyph":{"id":"7c1707f0-0c42-4415-9ae5-d3ea09de32c2","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"4a49b679-2536-4c90-8257-2f88fb8447fd","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":6}],"color":["#f22c40"],"cyl":[6],"fill_alpha":[0.8],"height":[1657.8],"label":[{"cyl":6}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["6"],"y":[828.9]}},"id":"3bc61141-04aa-40b4-a068-dc2ad7df64cb","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":6118.875},"id":"648f986c-e1cc-46a5-88b0-4cbcb6c99b2d","type":"Range1d"},{"attributes":{},"id":"79e70562-dd4e-4883-9c1e-3462555254ba","type":"CategoricalTicker"}],"root_ids":["8ec67f59-310b-4fbf-b9ff-764ae0409fc9"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"0727391f-d6fd-432c-adf1-76daecdd8914","elementid":"ba6556bd-88e5-4a7d-8e69-bd7b22524146","modelid":"8ec67f59-310b-4fbf-b9ff-764ae0409fc9"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
