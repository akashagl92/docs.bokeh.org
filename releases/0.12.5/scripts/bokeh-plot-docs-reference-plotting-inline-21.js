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
      };var element = document.getElementById("a8821796-bcee-46cc-9a6d-37ab58839a81");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a8821796-bcee-46cc-9a6d-37ab58839a81' but no matching script tag was found. ")
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
                var docs_json = {"49138495-2655-4d2f-a0c1-97cd30b0d291":{"roots":{"references":[{"attributes":{"plot":{"id":"ab6764d4-fdb9-4e47-b0ab-571e978bd980","subtype":"Figure","type":"Plot"}},"id":"25e1e6fe-536d-4158-aecf-ffe2e58e2141","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c0ed071c-7984-464d-a28b-ab15464a6198","type":"SquareCross"},{"attributes":{"callback":null},"id":"3dfd5c84-9f33-4d7d-9168-5acd5e8a808d","type":"DataRange1d"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#7FC97F"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"30159af5-83ad-4c17-a62d-68e275d1b9bd","type":"SquareCross"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a81372c7-3b8f-4a56-9864-d35c45310d90","type":"BoxAnnotation"},{"attributes":{},"id":"a491696c-2481-4aac-b3fc-510e10c49fa7","type":"BasicTicker"},{"attributes":{"plot":{"id":"ab6764d4-fdb9-4e47-b0ab-571e978bd980","subtype":"Figure","type":"Plot"}},"id":"7945428c-a608-4b10-b522-5b03884fe09a","type":"SaveTool"},{"attributes":{"plot":null,"text":""},"id":"82893bfe-6c32-429b-955f-5d69c96b5ae8","type":"Title"},{"attributes":{},"id":"219f61a1-7549-444e-bef6-a76bd94cb728","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"ab6764d4-fdb9-4e47-b0ab-571e978bd980","subtype":"Figure","type":"Plot"}},"id":"2c9ea4b3-1055-48aa-9e52-0855178fb52f","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8ef2d4d5-16a1-406c-9944-743df2890e88","type":"PanTool"},{"id":"2c9ea4b3-1055-48aa-9e52-0855178fb52f","type":"WheelZoomTool"},{"id":"356b4bb1-4870-4638-a186-7899ce183936","type":"BoxZoomTool"},{"id":"7945428c-a608-4b10-b522-5b03884fe09a","type":"SaveTool"},{"id":"589abeb5-7615-4e1b-95d6-0874be8fcce1","type":"ResetTool"},{"id":"25e1e6fe-536d-4158-aecf-ffe2e58e2141","type":"HelpTool"}]},"id":"4db01e79-30a7-4802-b7c4-841c0337fd07","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["size","x","y"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"1ed22853-c715-4450-9a55-53e628f8d758","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"ab6764d4-fdb9-4e47-b0ab-571e978bd980","subtype":"Figure","type":"Plot"}},"id":"8ef2d4d5-16a1-406c-9944-743df2890e88","type":"PanTool"},{"attributes":{"overlay":{"id":"a81372c7-3b8f-4a56-9864-d35c45310d90","type":"BoxAnnotation"},"plot":{"id":"ab6764d4-fdb9-4e47-b0ab-571e978bd980","subtype":"Figure","type":"Plot"}},"id":"356b4bb1-4870-4638-a186-7899ce183936","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"e0a91f49-e095-4133-bb59-fa44ff035f74","type":"BasicTickFormatter"},"plot":{"id":"ab6764d4-fdb9-4e47-b0ab-571e978bd980","subtype":"Figure","type":"Plot"},"ticker":{"id":"a491696c-2481-4aac-b3fc-510e10c49fa7","type":"BasicTicker"}},"id":"5b884660-09ae-410b-a5f0-33fce091f6f7","type":"LinearAxis"},{"attributes":{},"id":"52a60993-8d80-4e34-b983-3eb7f16b9b8c","type":"ToolEvents"},{"attributes":{},"id":"e4998192-ed8c-4898-9813-067477adf7f1","type":"BasicTicker"},{"attributes":{"plot":{"id":"ab6764d4-fdb9-4e47-b0ab-571e978bd980","subtype":"Figure","type":"Plot"}},"id":"589abeb5-7615-4e1b-95d6-0874be8fcce1","type":"ResetTool"},{"attributes":{"formatter":{"id":"219f61a1-7549-444e-bef6-a76bd94cb728","type":"BasicTickFormatter"},"plot":{"id":"ab6764d4-fdb9-4e47-b0ab-571e978bd980","subtype":"Figure","type":"Plot"},"ticker":{"id":"e4998192-ed8c-4898-9813-067477adf7f1","type":"BasicTicker"}},"id":"96a83ca9-3a82-4528-bc8b-46077a6b5f27","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"ab6764d4-fdb9-4e47-b0ab-571e978bd980","subtype":"Figure","type":"Plot"},"ticker":{"id":"e4998192-ed8c-4898-9813-067477adf7f1","type":"BasicTicker"}},"id":"97088c5d-bba3-4351-b878-2fa19b333c1c","type":"Grid"},{"attributes":{"below":[{"id":"5b884660-09ae-410b-a5f0-33fce091f6f7","type":"LinearAxis"}],"left":[{"id":"96a83ca9-3a82-4528-bc8b-46077a6b5f27","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"5b884660-09ae-410b-a5f0-33fce091f6f7","type":"LinearAxis"},{"id":"6fe19b4a-33f8-43f8-a905-e75ebfcda085","type":"Grid"},{"id":"96a83ca9-3a82-4528-bc8b-46077a6b5f27","type":"LinearAxis"},{"id":"97088c5d-bba3-4351-b878-2fa19b333c1c","type":"Grid"},{"id":"a81372c7-3b8f-4a56-9864-d35c45310d90","type":"BoxAnnotation"},{"id":"6c255d92-eea5-466e-a71c-5897e5257975","type":"GlyphRenderer"}],"title":{"id":"82893bfe-6c32-429b-955f-5d69c96b5ae8","type":"Title"},"tool_events":{"id":"52a60993-8d80-4e34-b983-3eb7f16b9b8c","type":"ToolEvents"},"toolbar":{"id":"4db01e79-30a7-4802-b7c4-841c0337fd07","type":"Toolbar"},"x_range":{"id":"8132a55c-e5d0-4ac4-86b9-aba6b8489d63","type":"DataRange1d"},"y_range":{"id":"3dfd5c84-9f33-4d7d-9168-5acd5e8a808d","type":"DataRange1d"}},"id":"ab6764d4-fdb9-4e47-b0ab-571e978bd980","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"8132a55c-e5d0-4ac4-86b9-aba6b8489d63","type":"DataRange1d"},{"attributes":{"plot":{"id":"ab6764d4-fdb9-4e47-b0ab-571e978bd980","subtype":"Figure","type":"Plot"},"ticker":{"id":"a491696c-2481-4aac-b3fc-510e10c49fa7","type":"BasicTicker"}},"id":"6fe19b4a-33f8-43f8-a905-e75ebfcda085","type":"Grid"},{"attributes":{},"id":"e0a91f49-e095-4133-bb59-fa44ff035f74","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"1ed22853-c715-4450-9a55-53e628f8d758","type":"ColumnDataSource"},"glyph":{"id":"30159af5-83ad-4c17-a62d-68e275d1b9bd","type":"SquareCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c0ed071c-7984-464d-a28b-ab15464a6198","type":"SquareCross"},"selection_glyph":null},"id":"6c255d92-eea5-466e-a71c-5897e5257975","type":"GlyphRenderer"}],"root_ids":["ab6764d4-fdb9-4e47-b0ab-571e978bd980"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"49138495-2655-4d2f-a0c1-97cd30b0d291","elementid":"a8821796-bcee-46cc-9a6d-37ab58839a81","modelid":"ab6764d4-fdb9-4e47-b0ab-571e978bd980"}];
                
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
