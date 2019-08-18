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
      };var element = document.getElementById("acdae5fe-348e-4275-a33c-7405346fc6f3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'acdae5fe-348e-4275-a33c-7405346fc6f3' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"625b4f1c-7edb-4e45-93dc-ad1f8544faac":{"roots":{"references":[{"attributes":{"callback":null,"factors":["apples","bananas","pears"]},"id":"ff2869f9-85ae-49d4-8f9f-80ca9a1cce70","type":"FactorRange"},{"attributes":{"plot":{"id":"d0dca483-a9e2-42e5-b52c-78c837c2c93a","subtype":"Chart","type":"Plot"}},"id":"049aaf8b-dbfe-444b-8324-4d0277f22b7e","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"55915b31-a494-4959-8947-84cf81dd4701","type":"PanTool"},{"id":"c9ed7a80-8fee-4187-9abc-4b6b6ee7a397","type":"WheelZoomTool"},{"id":"71a78b35-f3de-48f5-8a8d-f93a3858580e","type":"BoxZoomTool"},{"id":"e480b718-6d87-415e-8e64-2250aff04fc9","type":"SaveTool"},{"id":"a9ca2c0c-6817-48f2-b7cc-c74aeb341547","type":"ResetTool"},{"id":"049aaf8b-dbfe-444b-8324-4d0277f22b7e","type":"HelpTool"}]},"id":"4893683a-ab15-441f-b696-df6b84d81587","type":"Toolbar"},{"attributes":{"below":[{"id":"5d318bfd-4e6d-4e02-b77f-c136d47ea9a5","type":"CategoricalAxis"}],"css_classes":null,"height":400,"left":[{"id":"7d0ecebf-b574-4198-99fc-62e4c979d035","type":"LinearAxis"}],"renderers":[{"id":"61490f3d-d8e2-4d13-b176-a90991e1a772","type":"BoxAnnotation"},{"id":"5158654b-bb17-4d0c-a108-25bc473d4161","type":"GlyphRenderer"},{"id":"1b893ce0-336d-4dd9-ad0b-06470e404ccf","type":"GlyphRenderer"},{"id":"468aa202-26bc-4609-9846-805f04f8b88a","type":"GlyphRenderer"},{"id":"dc627d20-6213-4c1d-9be8-6777bee7c8f5","type":"GlyphRenderer"},{"id":"991a6c65-ca04-4814-bab4-f6a8a4845ca4","type":"GlyphRenderer"},{"id":"e38c28df-c95c-4c0a-8100-b2b06d0ffb29","type":"Legend"},{"id":"5d318bfd-4e6d-4e02-b77f-c136d47ea9a5","type":"CategoricalAxis"},{"id":"7d0ecebf-b574-4198-99fc-62e4c979d035","type":"LinearAxis"}],"title":{"id":"1a554f81-559d-45e3-854e-dbc67152e5b0","type":"Title"},"tool_events":{"id":"70e4d8d3-cbf8-4d02-8817-096ffffc9a26","type":"ToolEvents"},"toolbar":{"id":"4893683a-ab15-441f-b696-df6b84d81587","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"ff2869f9-85ae-49d4-8f9f-80ca9a1cce70","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"770f2a2f-19a6-480e-b53d-4c7172a4d0f2","type":"Range1d"}},"id":"d0dca483-a9e2-42e5-b52c-78c837c2c93a","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y","values"],"data":{"chart_index":[{"fruit_count":"(3.3, 4.5]"},{"fruit_count":"(3.3, 4.5]"},{"fruit_count":"(3.3, 4.5]"}],"fruit_count":["(3.3, 4.5]","(3.3, 4.5]","(3.3, 4.5]"],"values":[4,4,4],"x":["apples","bananas","pears"],"y":[1,3,3]}},"id":"d63a9582-e0ff-47eb-aa7b-8813e8514bbe","type":"ColumnDataSource"},{"attributes":{},"id":"8506f5cf-0b2d-4414-bacb-4ac5fdfa8858","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#9ecae1"},"height":{"units":"data","value":0.95},"line_color":{"value":"#9ecae1"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"638ca885-cf85-4991-b21e-982dcd5cf0a7","type":"Rect"},{"attributes":{"overlay":{"id":"61490f3d-d8e2-4d13-b176-a90991e1a772","type":"BoxAnnotation"},"plot":{"id":"d0dca483-a9e2-42e5-b52c-78c837c2c93a","subtype":"Chart","type":"Plot"}},"id":"71a78b35-f3de-48f5-8a8d-f93a3858580e","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"d0dca483-a9e2-42e5-b52c-78c837c2c93a","subtype":"Chart","type":"Plot"}},"id":"a9ca2c0c-6817-48f2-b7cc-c74aeb341547","type":"ResetTool"},{"attributes":{"data_source":{"id":"bc5d4828-b6d8-4f16-a2ac-2524269d048c","type":"ColumnDataSource"},"glyph":{"id":"065c1fff-38f3-4864-8ad4-0c65fd47c4c9","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1b893ce0-336d-4dd9-ad0b-06470e404ccf","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y","values"],"data":{"chart_index":[{"fruit_count":"(6.8, 8]"}],"fruit_count":["(6.8, 8]"],"values":[8],"x":["apples"],"y":[3]}},"id":"df2c3f16-551f-4252-8184-a0636760d668","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"d0dca483-a9e2-42e5-b52c-78c837c2c93a","subtype":"Chart","type":"Plot"}},"id":"e480b718-6d87-415e-8e64-2250aff04fc9","type":"SaveTool"},{"attributes":{"axis_label":"sample","formatter":{"id":"f5524828-e2d2-4159-9eb0-3d5c438f18b8","type":"BasicTickFormatter"},"plot":{"id":"d0dca483-a9e2-42e5-b52c-78c837c2c93a","subtype":"Chart","type":"Plot"},"ticker":{"id":"8506f5cf-0b2d-4414-bacb-4ac5fdfa8858","type":"BasicTicker"}},"id":"7d0ecebf-b574-4198-99fc-62e4c979d035","type":"LinearAxis"},{"attributes":{"data_source":{"id":"d63a9582-e0ff-47eb-aa7b-8813e8514bbe","type":"ColumnDataSource"},"glyph":{"id":"638ca885-cf85-4991-b21e-982dcd5cf0a7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"dc627d20-6213-4c1d-9be8-6777bee7c8f5","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":3.77,"start":0.22999999999999998},"id":"770f2a2f-19a6-480e-b53d-4c7172a4d0f2","type":"Range1d"},{"attributes":{"dilate":true,"fill_color":{"value":"#c6dbef"},"height":{"units":"data","value":0.95},"line_color":{"value":"#c6dbef"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e33e8331-d5b1-4793-9c9c-0ab386ec9a1e","type":"Rect"},{"attributes":{"plot":null,"text":"Fruits"},"id":"1a554f81-559d-45e3-854e-dbc67152e5b0","type":"Title"},{"attributes":{"axis_label":"fruit","formatter":{"id":"0bb09674-f64f-48cc-8383-8f132c91fe71","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"d0dca483-a9e2-42e5-b52c-78c837c2c93a","subtype":"Chart","type":"Plot"},"ticker":{"id":"d550adef-0608-4ea5-8626-253054f7efa4","type":"CategoricalTicker"}},"id":"5d318bfd-4e6d-4e02-b77f-c136d47ea9a5","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"df2c3f16-551f-4252-8184-a0636760d668","type":"ColumnDataSource"},"glyph":{"id":"517a2b78-a666-4afd-b1cd-1e2bdfb7185b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5158654b-bb17-4d0c-a108-25bc473d4161","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"d922e988-5ae3-48ae-98c0-ed590e5198d3","type":"ColumnDataSource"},"glyph":{"id":"e33e8331-d5b1-4793-9c9c-0ab386ec9a1e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"991a6c65-ca04-4814-bab4-f6a8a4845ca4","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"d0dca483-a9e2-42e5-b52c-78c837c2c93a","subtype":"Chart","type":"Plot"}},"id":"55915b31-a494-4959-8947-84cf81dd4701","type":"PanTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#08519c"},"height":{"units":"data","value":0.95},"line_color":{"value":"#08519c"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"517a2b78-a666-4afd-b1cd-1e2bdfb7185b","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#3182bd"},"height":{"units":"data","value":0.95},"line_color":{"value":"#3182bd"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"065c1fff-38f3-4864-8ad4-0c65fd47c4c9","type":"Rect"},{"attributes":{"callback":null,"column_names":["x","y","values"],"data":{"chart_index":[{"fruit_count":"(5.7, 6.8]"}],"fruit_count":["(5.7, 6.8]"],"values":[6],"x":["pears"],"y":[1]}},"id":"bc5d4828-b6d8-4f16-a2ac-2524269d048c","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"61490f3d-d8e2-4d13-b176-a90991e1a772","type":"BoxAnnotation"},{"attributes":{"dilate":true,"fill_color":{"value":"#6baed6"},"height":{"units":"data","value":0.95},"line_color":{"value":"#6baed6"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"9e17d7a8-3f7b-4d98-8333-bd3ee6883683","type":"Rect"},{"attributes":{"callback":null,"column_names":["x","y","values"],"data":{"chart_index":[{"fruit_count":"[1, 2.2]"},{"fruit_count":"[1, 2.2]"}],"fruit_count":["[1, 2.2]","[1, 2.2]"],"values":[1,2],"x":["bananas","bananas"],"y":[1,2]}},"id":"d922e988-5ae3-48ae-98c0-ed590e5198d3","type":"ColumnDataSource"},{"attributes":{"label":{"value":"(6.8, 8]"},"renderers":[{"id":"5158654b-bb17-4d0c-a108-25bc473d4161","type":"GlyphRenderer"}]},"id":"2235c581-7368-4bbc-aa39-aacffea3322a","type":"LegendItem"},{"attributes":{},"id":"f5524828-e2d2-4159-9eb0-3d5c438f18b8","type":"BasicTickFormatter"},{"attributes":{},"id":"0bb09674-f64f-48cc-8383-8f132c91fe71","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"c14bc57f-0996-439b-805e-53579826eefd","type":"ColumnDataSource"},"glyph":{"id":"9e17d7a8-3f7b-4d98-8333-bd3ee6883683","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"468aa202-26bc-4609-9846-805f04f8b88a","type":"GlyphRenderer"},{"attributes":{"label":{"value":"(5.7, 6.8]"},"renderers":[{"id":"1b893ce0-336d-4dd9-ad0b-06470e404ccf","type":"GlyphRenderer"}]},"id":"db1b73ab-8994-444e-b928-096edfc9413e","type":"LegendItem"},{"attributes":{"label":{"value":"(4.5, 5.7]"},"renderers":[{"id":"468aa202-26bc-4609-9846-805f04f8b88a","type":"GlyphRenderer"}]},"id":"1ae553f9-d988-47b2-a2c4-adb6a99db345","type":"LegendItem"},{"attributes":{"items":[{"id":"2235c581-7368-4bbc-aa39-aacffea3322a","type":"LegendItem"},{"id":"db1b73ab-8994-444e-b928-096edfc9413e","type":"LegendItem"},{"id":"1ae553f9-d988-47b2-a2c4-adb6a99db345","type":"LegendItem"},{"id":"26db1d21-e5db-476b-8331-321e54783d89","type":"LegendItem"},{"id":"0dc487dc-2c3f-4eaf-98d7-d3505a4a445d","type":"LegendItem"}],"location":"top_left","plot":{"id":"d0dca483-a9e2-42e5-b52c-78c837c2c93a","subtype":"Chart","type":"Plot"}},"id":"e38c28df-c95c-4c0a-8100-b2b06d0ffb29","type":"Legend"},{"attributes":{"callback":null,"column_names":["x","y","values"],"data":{"chart_index":[{"fruit_count":"(4.5, 5.7]"},{"fruit_count":"(4.5, 5.7]"}],"fruit_count":["(4.5, 5.7]","(4.5, 5.7]"],"values":[5,5],"x":["apples","pears"],"y":[2,2]}},"id":"c14bc57f-0996-439b-805e-53579826eefd","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"d0dca483-a9e2-42e5-b52c-78c837c2c93a","subtype":"Chart","type":"Plot"}},"id":"c9ed7a80-8fee-4187-9abc-4b6b6ee7a397","type":"WheelZoomTool"},{"attributes":{},"id":"70e4d8d3-cbf8-4d02-8817-096ffffc9a26","type":"ToolEvents"},{"attributes":{},"id":"d550adef-0608-4ea5-8626-253054f7efa4","type":"CategoricalTicker"},{"attributes":{"label":{"value":"[1, 2.2]"},"renderers":[{"id":"991a6c65-ca04-4814-bab4-f6a8a4845ca4","type":"GlyphRenderer"}]},"id":"0dc487dc-2c3f-4eaf-98d7-d3505a4a445d","type":"LegendItem"},{"attributes":{"label":{"value":"(3.3, 4.5]"},"renderers":[{"id":"dc627d20-6213-4c1d-9be8-6777bee7c8f5","type":"GlyphRenderer"}]},"id":"26db1d21-e5db-476b-8331-321e54783d89","type":"LegendItem"}],"root_ids":["d0dca483-a9e2-42e5-b52c-78c837c2c93a"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"625b4f1c-7edb-4e45-93dc-ad1f8544faac","elementid":"acdae5fe-348e-4275-a33c-7405346fc6f3","modelid":"d0dca483-a9e2-42e5-b52c-78c837c2c93a"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
