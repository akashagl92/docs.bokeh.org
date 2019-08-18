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
      };var element = document.getElementById("f124d6b4-d1ef-4426-b9fa-6fbcf41f122f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f124d6b4-d1ef-4426-b9fa-6fbcf41f122f' but no matching script tag was found. ")
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
                var docs_json = {"e3dbc2c9-af55-44e9-8fa0-e1279b9c2f4c":{"roots":{"references":[{"attributes":{},"id":"e667ee5c-1d51-4740-a1f2-34e76bf3f633","type":"BasicTicker"},{"attributes":{"callback":null},"id":"590c34c6-db10-4984-97c2-4bdf8ac5586c","type":"DataRange1d"},{"attributes":{"data_source":{"id":"cc0cf2eb-9271-4554-ae63-dd6a3680400b","type":"ColumnDataSource"},"glyph":{"id":"0952ce50-4e19-4168-b596-aaa830e6d802","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"19499351-2dce-47f0-8f5b-bb00d3234d30","type":"Circle"},"selection_glyph":null},"id":"63a49edc-00c0-45ed-ae31-61b46516f11a","type":"GlyphRenderer"},{"attributes":{"align":"right","background_fill_color":{"value":"#aaaaee"},"plot":null,"text":"Title With Options","text_color":{"value":"orange"},"text_font_size":{"value":"25px"}},"id":"70929f3f-79d2-47aa-966e-24810c570479","type":"Title"},{"attributes":{"plot":{"id":"41c17cef-80a7-4bfd-afcd-60d40247eb0e","subtype":"Figure","type":"Plot"}},"id":"86666922-d4b3-4634-982a-78b76e535b62","type":"ResetTool"},{"attributes":{"callback":null},"id":"7cc957b7-544e-4bf0-a64a-0a92d6d62ce9","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e47066a4-8c23-4839-9c98-6e5464c6b904","type":"PanTool"},{"id":"0c2dd887-d532-414c-9cac-7f38301e6871","type":"WheelZoomTool"},{"id":"bb4f8c49-ef23-4580-a4c7-3232e98efcf5","type":"BoxZoomTool"},{"id":"16f5f16f-f00e-487b-8b92-ee672f3f4518","type":"SaveTool"},{"id":"86666922-d4b3-4634-982a-78b76e535b62","type":"ResetTool"},{"id":"0ea7853d-8b4d-4270-a2e7-d984e7786779","type":"HelpTool"}]},"id":"91376efc-66e4-4efd-88d4-bff6e99dbc88","type":"Toolbar"},{"attributes":{"plot":{"id":"41c17cef-80a7-4bfd-afcd-60d40247eb0e","subtype":"Figure","type":"Plot"}},"id":"0c2dd887-d532-414c-9cac-7f38301e6871","type":"WheelZoomTool"},{"attributes":{},"id":"b87d274e-9a6c-4fdb-a68d-2e9bcc967122","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"41c17cef-80a7-4bfd-afcd-60d40247eb0e","subtype":"Figure","type":"Plot"},"ticker":{"id":"753338a0-338a-4085-9f07-f57dcf3dc2b9","type":"BasicTicker"}},"id":"6bc68675-28a2-43e6-a788-54858bf13d6c","type":"Grid"},{"attributes":{},"id":"ffca5596-6c32-4c94-88d2-f2eec4295a2c","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"497bff13-8d44-42b3-ac01-bfa21ba81326","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"497bff13-8d44-42b3-ac01-bfa21ba81326","type":"BoxAnnotation"},"plot":{"id":"41c17cef-80a7-4bfd-afcd-60d40247eb0e","subtype":"Figure","type":"Plot"}},"id":"bb4f8c49-ef23-4580-a4c7-3232e98efcf5","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"7d7c3552-24a6-4d37-b71b-b3cb3cb497de","type":"LinearAxis"}],"left":[{"id":"5159387f-65ee-4246-b7c7-52f0aab3f738","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"7d7c3552-24a6-4d37-b71b-b3cb3cb497de","type":"LinearAxis"},{"id":"ee13f9a3-55a4-4ce2-8173-68413536fc66","type":"Grid"},{"id":"5159387f-65ee-4246-b7c7-52f0aab3f738","type":"LinearAxis"},{"id":"6bc68675-28a2-43e6-a788-54858bf13d6c","type":"Grid"},{"id":"497bff13-8d44-42b3-ac01-bfa21ba81326","type":"BoxAnnotation"},{"id":"63a49edc-00c0-45ed-ae31-61b46516f11a","type":"GlyphRenderer"}],"title":{"id":"70929f3f-79d2-47aa-966e-24810c570479","type":"Title"},"tool_events":{"id":"85730576-d6c5-4b85-87ed-a9cce5505e32","type":"ToolEvents"},"toolbar":{"id":"91376efc-66e4-4efd-88d4-bff6e99dbc88","type":"Toolbar"},"x_range":{"id":"590c34c6-db10-4984-97c2-4bdf8ac5586c","type":"DataRange1d"},"y_range":{"id":"7cc957b7-544e-4bf0-a64a-0a92d6d62ce9","type":"DataRange1d"}},"id":"41c17cef-80a7-4bfd-afcd-60d40247eb0e","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"b87d274e-9a6c-4fdb-a68d-2e9bcc967122","type":"BasicTickFormatter"},"plot":{"id":"41c17cef-80a7-4bfd-afcd-60d40247eb0e","subtype":"Figure","type":"Plot"},"ticker":{"id":"e667ee5c-1d51-4740-a1f2-34e76bf3f633","type":"BasicTicker"}},"id":"7d7c3552-24a6-4d37-b71b-b3cb3cb497de","type":"LinearAxis"},{"attributes":{},"id":"85730576-d6c5-4b85-87ed-a9cce5505e32","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"19499351-2dce-47f0-8f5b-bb00d3234d30","type":"Circle"},{"attributes":{"plot":{"id":"41c17cef-80a7-4bfd-afcd-60d40247eb0e","subtype":"Figure","type":"Plot"}},"id":"16f5f16f-f00e-487b-8b92-ee672f3f4518","type":"SaveTool"},{"attributes":{"plot":{"id":"41c17cef-80a7-4bfd-afcd-60d40247eb0e","subtype":"Figure","type":"Plot"},"ticker":{"id":"e667ee5c-1d51-4740-a1f2-34e76bf3f633","type":"BasicTicker"}},"id":"ee13f9a3-55a4-4ce2-8173-68413536fc66","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2],"y":[3,4]}},"id":"cc0cf2eb-9271-4554-ae63-dd6a3680400b","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"0952ce50-4e19-4168-b596-aaa830e6d802","type":"Circle"},{"attributes":{"plot":{"id":"41c17cef-80a7-4bfd-afcd-60d40247eb0e","subtype":"Figure","type":"Plot"}},"id":"e47066a4-8c23-4839-9c98-6e5464c6b904","type":"PanTool"},{"attributes":{"formatter":{"id":"ffca5596-6c32-4c94-88d2-f2eec4295a2c","type":"BasicTickFormatter"},"plot":{"id":"41c17cef-80a7-4bfd-afcd-60d40247eb0e","subtype":"Figure","type":"Plot"},"ticker":{"id":"753338a0-338a-4085-9f07-f57dcf3dc2b9","type":"BasicTicker"}},"id":"5159387f-65ee-4246-b7c7-52f0aab3f738","type":"LinearAxis"},{"attributes":{},"id":"753338a0-338a-4085-9f07-f57dcf3dc2b9","type":"BasicTicker"},{"attributes":{"plot":{"id":"41c17cef-80a7-4bfd-afcd-60d40247eb0e","subtype":"Figure","type":"Plot"}},"id":"0ea7853d-8b4d-4270-a2e7-d984e7786779","type":"HelpTool"}],"root_ids":["41c17cef-80a7-4bfd-afcd-60d40247eb0e"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"e3dbc2c9-af55-44e9-8fa0-e1279b9c2f4c","elementid":"f124d6b4-d1ef-4426-b9fa-6fbcf41f122f","modelid":"41c17cef-80a7-4bfd-afcd-60d40247eb0e"}];
                
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
