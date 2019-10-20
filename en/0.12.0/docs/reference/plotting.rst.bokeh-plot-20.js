document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("73344b9f-6992-4d0c-b569-9a4721ab9e41");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '73344b9f-6992-4d0c-b569-9a4721ab9e41' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"f75c2e8a-9540-4463-ba8b-e61b9129913c":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ad69235b-666a-4731-87e3-664b0ea4384a","type":"SquareCross"},{"attributes":{"plot":{"id":"18521db1-51f7-4605-b6ef-fdce335eee2f","subtype":"Figure","type":"Plot"}},"id":"72b4509c-7405-44a1-8b6d-81b08369a54f","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"12529b60-26d1-49e4-a521-b9bab53878a0","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"18521db1-51f7-4605-b6ef-fdce335eee2f","subtype":"Figure","type":"Plot"}},"id":"19126495-1829-4c82-95d2-3b0210bbb0dc","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"8b93a48d-1640-4246-9280-00b19202faca","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"18521db1-51f7-4605-b6ef-fdce335eee2f","subtype":"Figure","type":"Plot"}},"id":"fa1f3c3c-240d-4667-9fe3-44b701285c98","type":"SaveTool"},{"attributes":{},"id":"0aa8e68a-acff-4e8c-9593-fc10bbbb2af8","type":"ToolEvents"},{"attributes":{},"id":"844d6c8d-9e79-45f9-aa51-b0a67d272750","type":"BasicTicker"},{"attributes":{"formatter":{"id":"0a5c699f-3ec1-4a15-84b9-cac3f7f5cb4e","type":"BasicTickFormatter"},"plot":{"id":"18521db1-51f7-4605-b6ef-fdce335eee2f","subtype":"Figure","type":"Plot"},"ticker":{"id":"844d6c8d-9e79-45f9-aa51-b0a67d272750","type":"BasicTicker"}},"id":"a3b1919b-30d3-4589-8f52-016dd0e21ec1","type":"LinearAxis"},{"attributes":{"plot":{"id":"18521db1-51f7-4605-b6ef-fdce335eee2f","subtype":"Figure","type":"Plot"}},"id":"8bbe89b7-fffe-4bab-bf45-578af27d377c","type":"PanTool"},{"attributes":{"plot":{"id":"18521db1-51f7-4605-b6ef-fdce335eee2f","subtype":"Figure","type":"Plot"},"ticker":{"id":"844d6c8d-9e79-45f9-aa51-b0a67d272750","type":"BasicTicker"}},"id":"2eda3228-1c88-4270-a2ca-614b71f17219","type":"Grid"},{"attributes":{},"id":"4afe73cb-e3d4-4155-9266-c81cd0dd64b7","type":"BasicTicker"},{"attributes":{},"id":"0de801c7-f3fb-486f-a896-19c4436da86e","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"12529b60-26d1-49e4-a521-b9bab53878a0","type":"BoxAnnotation"},"plot":{"id":"18521db1-51f7-4605-b6ef-fdce335eee2f","subtype":"Figure","type":"Plot"}},"id":"fd7401f4-8a97-4baf-a362-f2246d152593","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"d25a0362-391f-4e6a-af04-d60fe9c5c796","type":"DataRange1d"},{"attributes":{"data_source":{"id":"8b93a48d-1640-4246-9280-00b19202faca","type":"ColumnDataSource"},"glyph":{"id":"cf763602-9dd3-4b99-84c4-bb270bcead82","type":"SquareCross"},"hover_glyph":null,"nonselection_glyph":{"id":"ad69235b-666a-4731-87e3-664b0ea4384a","type":"SquareCross"},"selection_glyph":null},"id":"1d6a3d43-a5f8-4568-a467-9e2875ed0add","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"a3b1919b-30d3-4589-8f52-016dd0e21ec1","type":"LinearAxis"}],"left":[{"id":"914c0f4f-7232-4707-bc47-54aa14b0c7e1","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"a3b1919b-30d3-4589-8f52-016dd0e21ec1","type":"LinearAxis"},{"id":"2eda3228-1c88-4270-a2ca-614b71f17219","type":"Grid"},{"id":"914c0f4f-7232-4707-bc47-54aa14b0c7e1","type":"LinearAxis"},{"id":"14ad2466-4a5b-4c69-b931-37a93a5d28f3","type":"Grid"},{"id":"12529b60-26d1-49e4-a521-b9bab53878a0","type":"BoxAnnotation"},{"id":"1d6a3d43-a5f8-4568-a467-9e2875ed0add","type":"GlyphRenderer"}],"title":{"id":"fe488aa0-8f63-4743-914b-5bfcb8e40f16","type":"Title"},"tool_events":{"id":"0aa8e68a-acff-4e8c-9593-fc10bbbb2af8","type":"ToolEvents"},"toolbar":{"id":"621feee7-a146-4d86-845b-b53637ce6d63","type":"Toolbar"},"x_range":{"id":"de681482-2023-45ed-89e8-8c72c2cabe7c","type":"DataRange1d"},"y_range":{"id":"d25a0362-391f-4e6a-af04-d60fe9c5c796","type":"DataRange1d"}},"id":"18521db1-51f7-4605-b6ef-fdce335eee2f","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"18521db1-51f7-4605-b6ef-fdce335eee2f","subtype":"Figure","type":"Plot"}},"id":"4b95f4b3-391a-453b-9b29-2072807c43ea","type":"ResetTool"},{"attributes":{"plot":null,"text":null},"id":"fe488aa0-8f63-4743-914b-5bfcb8e40f16","type":"Title"},{"attributes":{"callback":null},"id":"de681482-2023-45ed-89e8-8c72c2cabe7c","type":"DataRange1d"},{"attributes":{},"id":"0a5c699f-3ec1-4a15-84b9-cac3f7f5cb4e","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8bbe89b7-fffe-4bab-bf45-578af27d377c","type":"PanTool"},{"id":"19126495-1829-4c82-95d2-3b0210bbb0dc","type":"WheelZoomTool"},{"id":"fd7401f4-8a97-4baf-a362-f2246d152593","type":"BoxZoomTool"},{"id":"fa1f3c3c-240d-4667-9fe3-44b701285c98","type":"SaveTool"},{"id":"4b95f4b3-391a-453b-9b29-2072807c43ea","type":"ResetTool"},{"id":"72b4509c-7405-44a1-8b6d-81b08369a54f","type":"HelpTool"}]},"id":"621feee7-a146-4d86-845b-b53637ce6d63","type":"Toolbar"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#7FC97F"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"cf763602-9dd3-4b99-84c4-bb270bcead82","type":"SquareCross"},{"attributes":{"dimension":1,"plot":{"id":"18521db1-51f7-4605-b6ef-fdce335eee2f","subtype":"Figure","type":"Plot"},"ticker":{"id":"4afe73cb-e3d4-4155-9266-c81cd0dd64b7","type":"BasicTicker"}},"id":"14ad2466-4a5b-4c69-b931-37a93a5d28f3","type":"Grid"},{"attributes":{"formatter":{"id":"0de801c7-f3fb-486f-a896-19c4436da86e","type":"BasicTickFormatter"},"plot":{"id":"18521db1-51f7-4605-b6ef-fdce335eee2f","subtype":"Figure","type":"Plot"},"ticker":{"id":"4afe73cb-e3d4-4155-9266-c81cd0dd64b7","type":"BasicTicker"}},"id":"914c0f4f-7232-4707-bc47-54aa14b0c7e1","type":"LinearAxis"}],"root_ids":["18521db1-51f7-4605-b6ef-fdce335eee2f"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"f75c2e8a-9540-4463-ba8b-e61b9129913c","elementid":"73344b9f-6992-4d0c-b569-9a4721ab9e41","modelid":"18521db1-51f7-4605-b6ef-fdce335eee2f"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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