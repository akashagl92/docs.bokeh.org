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
      };var element = document.getElementById("86c0d763-9f21-4849-ada8-6c81aeaa6cf4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '86c0d763-9f21-4849-ada8-6c81aeaa6cf4' but no matching script tag was found. ")
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
                var docs_json = {"142b16a7-8ce7-4759-9dbc-ad1b7aee593b":{"roots":{"references":[{"attributes":{},"id":"52975984-df70-4d74-98e9-638b23bd0327","type":"BasicTicker"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"5725a292-7820-45ec-ad3d-ae622327df81","type":"Line"},{"attributes":{"plot":{"id":"859990aa-9862-4460-993c-3b964b38f8ab","subtype":"Figure","type":"Plot"}},"id":"d7926338-2233-4e27-b584-ce29013c4549","type":"ResetTool"},{"attributes":{"items":[{"id":"3ffccda3-d882-494d-8cbe-22b37387ed0c","type":"LegendItem"}],"plot":{"id":"859990aa-9862-4460-993c-3b964b38f8ab","subtype":"Figure","type":"Plot"}},"id":"9bb1bd8d-a6af-4232-9e36-8ffae6fd9b42","type":"Legend"},{"attributes":{"dimension":1,"plot":{"id":"859990aa-9862-4460-993c-3b964b38f8ab","subtype":"Figure","type":"Plot"},"ticker":{"id":"52975984-df70-4d74-98e9-638b23bd0327","type":"BasicTicker"}},"id":"a1ac1e04-9310-4d1a-a345-229547808882","type":"Grid"},{"attributes":{"callback":null},"id":"750bea7b-bd38-4789-a4bb-378c2dda93c2","type":"DataRange1d"},{"attributes":{"below":[{"id":"646d5c21-5bc9-4dde-ac8a-17de5f60825a","type":"LinearAxis"}],"left":[{"id":"dc06e371-4214-432f-84ad-56953422fc64","type":"LinearAxis"}],"renderers":[{"id":"646d5c21-5bc9-4dde-ac8a-17de5f60825a","type":"LinearAxis"},{"id":"dd8bbf30-0c0c-45e1-9604-26e98df2533d","type":"Grid"},{"id":"dc06e371-4214-432f-84ad-56953422fc64","type":"LinearAxis"},{"id":"a1ac1e04-9310-4d1a-a345-229547808882","type":"Grid"},{"id":"21438e96-8814-4bb9-a46a-f0f199144f9f","type":"BoxAnnotation"},{"id":"9bb1bd8d-a6af-4232-9e36-8ffae6fd9b42","type":"Legend"},{"id":"91d12144-2673-4d6a-91e3-4a10cab275cd","type":"GlyphRenderer"}],"title":{"id":"89e7581a-edd6-420e-96fb-dfedab8d036c","type":"Title"},"tool_events":{"id":"dab6c416-7b95-45cb-bdf3-f277103df4f3","type":"ToolEvents"},"toolbar":{"id":"c8578c20-b486-40a8-9428-c9530e413077","type":"Toolbar"},"x_range":{"id":"750bea7b-bd38-4789-a4bb-378c2dda93c2","type":"DataRange1d"},"y_range":{"id":"1aefb025-db59-4d1a-9b9a-e56126afb748","type":"DataRange1d"}},"id":"859990aa-9862-4460-993c-3b964b38f8ab","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"859990aa-9862-4460-993c-3b964b38f8ab","subtype":"Figure","type":"Plot"}},"id":"6e782c25-2c2b-4f8f-9bbb-314252e13705","type":"SaveTool"},{"attributes":{},"id":"dab6c416-7b95-45cb-bdf3-f277103df4f3","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"cd5141d6-fae2-4d27-9232-69731e2cfe0e","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"859990aa-9862-4460-993c-3b964b38f8ab","subtype":"Figure","type":"Plot"}},"id":"13c1818b-7945-44f4-a522-1d87ba6096b9","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"cd5141d6-fae2-4d27-9232-69731e2cfe0e","type":"ColumnDataSource"},"glyph":{"id":"5725a292-7820-45ec-ad3d-ae622327df81","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"24e42ef9-2d23-49b5-b33c-f7902e33f5a0","type":"Line"},"selection_glyph":null},"id":"91d12144-2673-4d6a-91e3-4a10cab275cd","type":"GlyphRenderer"},{"attributes":{"axis_label":"x","formatter":{"id":"3c685afc-5e58-4aea-bc2e-ac28613d53fc","type":"BasicTickFormatter"},"plot":{"id":"859990aa-9862-4460-993c-3b964b38f8ab","subtype":"Figure","type":"Plot"},"ticker":{"id":"f5399e40-23af-4e10-b4be-5185615c5c5f","type":"BasicTicker"}},"id":"646d5c21-5bc9-4dde-ac8a-17de5f60825a","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"64a656f3-e3b4-4eee-bf4f-d6e1f34fd3b3","type":"PanTool"},{"id":"13c1818b-7945-44f4-a522-1d87ba6096b9","type":"WheelZoomTool"},{"id":"f62af87b-768c-4aff-9c6b-c8d641030930","type":"BoxZoomTool"},{"id":"6e782c25-2c2b-4f8f-9bbb-314252e13705","type":"SaveTool"},{"id":"d7926338-2233-4e27-b584-ce29013c4549","type":"ResetTool"},{"id":"338da521-7fc2-4d31-8e25-0f577c9eb1ee","type":"HelpTool"}]},"id":"c8578c20-b486-40a8-9428-c9530e413077","type":"Toolbar"},{"attributes":{"plot":null,"text":"simple line example"},"id":"89e7581a-edd6-420e-96fb-dfedab8d036c","type":"Title"},{"attributes":{"plot":{"id":"859990aa-9862-4460-993c-3b964b38f8ab","subtype":"Figure","type":"Plot"}},"id":"338da521-7fc2-4d31-8e25-0f577c9eb1ee","type":"HelpTool"},{"attributes":{"overlay":{"id":"21438e96-8814-4bb9-a46a-f0f199144f9f","type":"BoxAnnotation"},"plot":{"id":"859990aa-9862-4460-993c-3b964b38f8ab","subtype":"Figure","type":"Plot"}},"id":"f62af87b-768c-4aff-9c6b-c8d641030930","type":"BoxZoomTool"},{"attributes":{},"id":"e060c624-9252-485e-84e6-b6175513a03f","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"1aefb025-db59-4d1a-9b9a-e56126afb748","type":"DataRange1d"},{"attributes":{"label":{"value":"Temp."},"renderers":[{"id":"91d12144-2673-4d6a-91e3-4a10cab275cd","type":"GlyphRenderer"}]},"id":"3ffccda3-d882-494d-8cbe-22b37387ed0c","type":"LegendItem"},{"attributes":{"plot":{"id":"859990aa-9862-4460-993c-3b964b38f8ab","subtype":"Figure","type":"Plot"},"ticker":{"id":"f5399e40-23af-4e10-b4be-5185615c5c5f","type":"BasicTicker"}},"id":"dd8bbf30-0c0c-45e1-9604-26e98df2533d","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"24e42ef9-2d23-49b5-b33c-f7902e33f5a0","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"21438e96-8814-4bb9-a46a-f0f199144f9f","type":"BoxAnnotation"},{"attributes":{},"id":"f5399e40-23af-4e10-b4be-5185615c5c5f","type":"BasicTicker"},{"attributes":{"plot":{"id":"859990aa-9862-4460-993c-3b964b38f8ab","subtype":"Figure","type":"Plot"}},"id":"64a656f3-e3b4-4eee-bf4f-d6e1f34fd3b3","type":"PanTool"},{"attributes":{"axis_label":"y","formatter":{"id":"e060c624-9252-485e-84e6-b6175513a03f","type":"BasicTickFormatter"},"plot":{"id":"859990aa-9862-4460-993c-3b964b38f8ab","subtype":"Figure","type":"Plot"},"ticker":{"id":"52975984-df70-4d74-98e9-638b23bd0327","type":"BasicTicker"}},"id":"dc06e371-4214-432f-84ad-56953422fc64","type":"LinearAxis"},{"attributes":{},"id":"3c685afc-5e58-4aea-bc2e-ac28613d53fc","type":"BasicTickFormatter"}],"root_ids":["859990aa-9862-4460-993c-3b964b38f8ab"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"142b16a7-8ce7-4759-9dbc-ad1b7aee593b","elementid":"86c0d763-9f21-4849-ada8-6c81aeaa6cf4","modelid":"859990aa-9862-4460-993c-3b964b38f8ab"}];
                
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
