document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
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
      };var element = document.getElementById("97a8bb05-778a-488a-80d8-9940fabc4c8e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '97a8bb05-778a-488a-80d8-9940fabc4c8e' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"8eea41f8-df93-4bef-b1ed-55523477a862":{"roots":{"references":[{"attributes":{},"id":"1d273727-137a-438e-9131-f067d4cba998","type":"BasicTickFormatter"},{"attributes":{"legends":[["stamp",[{"id":"51f4cd9a-d180-4a8d-b960-98885b3af39f","type":"GlyphRenderer"}]],["postcard",[{"id":"16b9b34a-7720-4c7f-96fd-4f8c6b505062","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"f6398d34-1453-4f28-a5e0-143447925576","subtype":"Chart","type":"Plot"}},"id":"99814c80-a366-4c6c-b2cd-a210aebbd839","type":"Legend"},{"attributes":{"below":[{"id":"1b267ec9-0d52-4609-bc01-e61a51aaa4d4","type":"LinearAxis"}],"height":400,"left":[{"id":"e2459078-3007-44b9-9569-582b1051400b","type":"LinearAxis"}],"renderers":[{"id":"88182974-1196-4143-89fd-236206b7b540","type":"BoxAnnotation"},{"id":"51f4cd9a-d180-4a8d-b960-98885b3af39f","type":"GlyphRenderer"},{"id":"16b9b34a-7720-4c7f-96fd-4f8c6b505062","type":"GlyphRenderer"},{"id":"99814c80-a366-4c6c-b2cd-a210aebbd839","type":"Legend"},{"id":"1b267ec9-0d52-4609-bc01-e61a51aaa4d4","type":"LinearAxis"},{"id":"e2459078-3007-44b9-9569-582b1051400b","type":"LinearAxis"},{"id":"0b37f6a5-fde4-4e96-8633-ea4b74a75609","type":"Grid"},{"id":"62ae4f6f-1093-466d-84e8-8dd0708c1266","type":"Grid"}],"title":{"id":"c1ca9b47-4fd1-4730-8f23-8172bbe2c50c","type":"Title"},"tool_events":{"id":"6e1173b4-b671-424b-b2d1-e59f1b1a0b96","type":"ToolEvents"},"toolbar":{"id":"106c7d5c-60ce-4594-879d-4ac7654d9f10","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"a1ece98a-2214-45a2-a4f7-70b1e4c3996a","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"181bfec7-fa40-47ed-8012-955bdebdb59f","type":"Range1d"}},"id":"f6398d34-1453-4f28-a5e0-143447925576","subtype":"Chart","type":"Plot"},{"attributes":{"plot":null,"text":"U.S. Postage Rates (1999-2015)"},"id":"c1ca9b47-4fd1-4730-8f23-8172bbe2c50c","type":"Title"},{"attributes":{"axis_label":"Rate per ounce","formatter":{"id":"d3b4b9c6-3831-4b28-b907-a0f442159fdf","type":"BasicTickFormatter"},"plot":{"id":"f6398d34-1453-4f28-a5e0-143447925576","subtype":"Chart","type":"Plot"},"ticker":{"id":"3d17a15e-2d95-4f6c-b03c-126138289895","type":"BasicTicker"}},"id":"e2459078-3007-44b9-9569-582b1051400b","type":"LinearAxis"},{"attributes":{"line_color":{"value":"#5ab738"},"line_dash":[6],"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"d1511bf8-faf5-4cb8-93f2-fe3df4778ca7","type":"Line"},{"attributes":{"plot":{"id":"f6398d34-1453-4f28-a5e0-143447925576","subtype":"Chart","type":"Plot"}},"id":"a90ecdbb-b548-4ace-a2fc-98d40bf63a26","type":"SaveTool"},{"attributes":{},"id":"d3b4b9c6-3831-4b28-b907-a0f442159fdf","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"bb2d7895-09a2-4eef-95ba-346e1ecf54dc","type":"PanTool"},{"id":"5a5f558e-0b4d-4e3b-ae92-80e4d0b8b663","type":"WheelZoomTool"},{"id":"948101bc-e27f-4c7a-9e38-00e2d14510ae","type":"BoxZoomTool"},{"id":"a90ecdbb-b548-4ace-a2fc-98d40bf63a26","type":"SaveTool"},{"id":"b32024bb-a062-4d07-8335-f742a3b6465c","type":"ResetTool"},{"id":"a98f4638-ed27-4843-8d35-bb450bc1ac8d","type":"HelpTool"}]},"id":"106c7d5c-60ce-4594-879d-4ac7654d9f10","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"88182974-1196-4143-89fd-236206b7b540","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"88182974-1196-4143-89fd-236206b7b540","type":"BoxAnnotation"},"plot":{"id":"f6398d34-1453-4f28-a5e0-143447925576","subtype":"Chart","type":"Plot"}},"id":"948101bc-e27f-4c7a-9e38-00e2d14510ae","type":"BoxZoomTool"},{"attributes":{"callback":null,"end":0.519,"start":0.171},"id":"181bfec7-fa40-47ed-8012-955bdebdb59f","type":"Range1d"},{"attributes":{"plot":{"id":"f6398d34-1453-4f28-a5e0-143447925576","subtype":"Chart","type":"Plot"}},"id":"b32024bb-a062-4d07-8335-f742a3b6465c","type":"ResetTool"},{"attributes":{"plot":{"id":"f6398d34-1453-4f28-a5e0-143447925576","subtype":"Chart","type":"Plot"}},"id":"a98f4638-ed27-4843-8d35-bb450bc1ac8d","type":"HelpTool"},{"attributes":{"data_source":{"id":"acaf8dff-7109-4a8d-bed5-4a9d1885cd88","type":"ColumnDataSource"},"glyph":{"id":"5ade967f-e959-4b8f-a8ab-71f78df16a63","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"16b9b34a-7720-4c7f-96fd-4f8c6b505062","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"f6398d34-1453-4f28-a5e0-143447925576","subtype":"Chart","type":"Plot"},"ticker":{"id":"3d17a15e-2d95-4f6c-b03c-126138289895","type":"BasicTicker"}},"id":"62ae4f6f-1093-466d-84e8-8dd0708c1266","type":"Grid"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":["None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None"],"x_values":[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16],"y_values":[0.2,0.2,0.2,0.2,0.21,0.21,0.23,0.23,0.23,0.23,0.23,0.23,0.23,0.23,0.24,0.24,0.26,0.26,0.27,0.27,0.28,0.28,0.28,0.28,0.29,0.29,0.32,0.32,0.33,0.33,0.34,0.34,0.35]}},"id":"acaf8dff-7109-4a8d-bed5-4a9d1885cd88","type":"ColumnDataSource"},{"attributes":{},"id":"3d17a15e-2d95-4f6c-b03c-126138289895","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":["None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None"],"x_values":[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16],"y_values":[0.33,0.33,0.33,0.33,0.34,0.34,0.37,0.37,0.37,0.37,0.37,0.37,0.37,0.37,0.39,0.39,0.41,0.41,0.42,0.42,0.44,0.44,0.44,0.44,0.44,0.44,0.45,0.45,0.46,0.46,0.49,0.49,0.49]}},"id":"e40732f6-e69c-4731-8eea-82409b5d8636","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"f6398d34-1453-4f28-a5e0-143447925576","subtype":"Chart","type":"Plot"}},"id":"bb2d7895-09a2-4eef-95ba-346e1ecf54dc","type":"PanTool"},{"attributes":{"axis_label":"index","formatter":{"id":"1d273727-137a-438e-9131-f067d4cba998","type":"BasicTickFormatter"},"plot":{"id":"f6398d34-1453-4f28-a5e0-143447925576","subtype":"Chart","type":"Plot"},"ticker":{"id":"dec50d44-dfd0-4835-ac2b-85a22a0c1e76","type":"BasicTicker"}},"id":"1b267ec9-0d52-4609-bc01-e61a51aaa4d4","type":"LinearAxis"},{"attributes":{"line_color":{"value":"#f22c40"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"5ade967f-e959-4b8f-a8ab-71f78df16a63","type":"Line"},{"attributes":{"plot":{"id":"f6398d34-1453-4f28-a5e0-143447925576","subtype":"Chart","type":"Plot"},"ticker":{"id":"dec50d44-dfd0-4835-ac2b-85a22a0c1e76","type":"BasicTicker"}},"id":"0b37f6a5-fde4-4e96-8633-ea4b74a75609","type":"Grid"},{"attributes":{},"id":"dec50d44-dfd0-4835-ac2b-85a22a0c1e76","type":"BasicTicker"},{"attributes":{"callback":null,"end":17.6,"start":-1.6},"id":"a1ece98a-2214-45a2-a4f7-70b1e4c3996a","type":"Range1d"},{"attributes":{},"id":"6e1173b4-b671-424b-b2d1-e59f1b1a0b96","type":"ToolEvents"},{"attributes":{"plot":{"id":"f6398d34-1453-4f28-a5e0-143447925576","subtype":"Chart","type":"Plot"}},"id":"5a5f558e-0b4d-4e3b-ae92-80e4d0b8b663","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"e40732f6-e69c-4731-8eea-82409b5d8636","type":"ColumnDataSource"},"glyph":{"id":"d1511bf8-faf5-4cb8-93f2-fe3df4778ca7","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"51f4cd9a-d180-4a8d-b960-98885b3af39f","type":"GlyphRenderer"}],"root_ids":["f6398d34-1453-4f28-a5e0-143447925576"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"8eea41f8-df93-4bef-b1ed-55523477a862","elementid":"97a8bb05-778a-488a-80d8-9940fabc4c8e","modelid":"f6398d34-1453-4f28-a5e0-143447925576"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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
});