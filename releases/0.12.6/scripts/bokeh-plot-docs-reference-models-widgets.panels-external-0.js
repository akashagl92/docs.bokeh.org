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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("5d7c32a0-3d85-448d-9298-0f2243f74ab1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5d7c32a0-3d85-448d-9298-0f2243f74ab1' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"53b6cd0f-9d13-4cd5-a54f-b115c0fa5942":{"roots":{"references":[{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"fdbf4e3b-edb3-4302-a66a-6010a1cfd85d","type":"Line"},{"attributes":{"plot":{"id":"586ced37-d0bc-4e65-9a8a-bb22cace2756","subtype":"Figure","type":"Plot"}},"id":"5e25175c-70a7-426d-a9db-e9136608428d","type":"PanTool"},{"attributes":{"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"2f5b8729-7f02-4ea9-a329-d29206d8f32b","type":"Line"},{"attributes":{"plot":{"id":"586ced37-d0bc-4e65-9a8a-bb22cace2756","subtype":"Figure","type":"Plot"}},"id":"a6153285-c538-4d23-a7b2-cac9e9f6ac8c","type":"HelpTool"},{"attributes":{"plot":{"id":"fc3b920b-e54c-4e5e-b075-a574038b9d98","subtype":"Figure","type":"Plot"}},"id":"930847ca-dc8f-4b14-bc03-7a72062853b9","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"aacd98a9-3003-4d03-8767-3d34e38195c6","type":"BasicTickFormatter"},"plot":{"id":"586ced37-d0bc-4e65-9a8a-bb22cace2756","subtype":"Figure","type":"Plot"},"ticker":{"id":"640343be-3c28-46b2-8cb2-9b4f822b6103","type":"BasicTicker"}},"id":"64f44849-26c2-4cb5-a5a0-d9af2c2045f2","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"8648d02f-43bf-42cd-b3d4-ef67cfe1efaa","type":"Circle"},{"attributes":{"callback":null},"id":"7bf2ea01-f38a-495b-a51c-ebf4c69e6872","type":"DataRange1d"},{"attributes":{"plot":{"id":"586ced37-d0bc-4e65-9a8a-bb22cace2756","subtype":"Figure","type":"Plot"}},"id":"3431dcb2-354c-4bad-8a97-591eb571f9a7","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"73bc878b-fcfb-4abb-9ebf-63f6b5015a59","type":"Circle"},{"attributes":{},"id":"ec415a17-b2ac-4133-b60b-8dca0bc391a6","type":"LinearScale"},{"attributes":{"below":[{"id":"f77470d9-3dad-42d0-99d9-b26369e36aee","type":"LinearAxis"}],"left":[{"id":"4ab9fd31-3741-4dfc-ae0d-aa425cb94c01","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"f77470d9-3dad-42d0-99d9-b26369e36aee","type":"LinearAxis"},{"id":"62864ef9-472c-4079-8d25-54e7aef12d2c","type":"Grid"},{"id":"4ab9fd31-3741-4dfc-ae0d-aa425cb94c01","type":"LinearAxis"},{"id":"26e7a131-fa31-474a-9e43-413bc3d2d6e4","type":"Grid"},{"id":"fd2bf34c-d2c4-4420-8558-bb5a99ee909b","type":"BoxAnnotation"},{"id":"e78846c9-ba36-4264-8653-2c6afbfe8898","type":"GlyphRenderer"}],"title":{"id":"5fb7620f-53ec-4008-9816-81d5e634347e","type":"Title"},"tool_events":{"id":"db95846b-eca4-4877-8d37-1b7b8a33197d","type":"ToolEvents"},"toolbar":{"id":"dcf32094-ec05-4694-839f-bb1769a3fcc0","type":"Toolbar"},"x_range":{"id":"0bc8daab-b567-4794-bc10-8bb4048980e5","type":"DataRange1d"},"x_scale":{"id":"ba119df9-84e7-48dc-8467-5f7e761eda18","type":"LinearScale"},"y_range":{"id":"2cc0273a-275b-498e-adef-050fe7b36693","type":"DataRange1d"},"y_scale":{"id":"ec415a17-b2ac-4133-b60b-8dca0bc391a6","type":"LinearScale"}},"id":"fc3b920b-e54c-4e5e-b075-a574038b9d98","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5e25175c-70a7-426d-a9db-e9136608428d","type":"PanTool"},{"id":"fadfb735-b2b7-4f26-9c03-357def3c9b45","type":"WheelZoomTool"},{"id":"c3461115-b9a6-4176-952d-599dfd3e93ed","type":"BoxZoomTool"},{"id":"3431dcb2-354c-4bad-8a97-591eb571f9a7","type":"SaveTool"},{"id":"ba9e77d6-5c3c-4fcf-8d75-4dcf0420b860","type":"ResetTool"},{"id":"a6153285-c538-4d23-a7b2-cac9e9f6ac8c","type":"HelpTool"}]},"id":"33be53a3-ebaa-4791-8a5d-9d65615d946d","type":"Toolbar"},{"attributes":{"plot":{"id":"fc3b920b-e54c-4e5e-b075-a574038b9d98","subtype":"Figure","type":"Plot"}},"id":"9c3b97b2-e432-4a20-bc75-86a133cd15b8","type":"PanTool"},{"attributes":{"callback":null},"id":"0d04acc1-9219-47b9-8818-93237a9dab1c","type":"DataRange1d"},{"attributes":{},"id":"db95846b-eca4-4877-8d37-1b7b8a33197d","type":"ToolEvents"},{"attributes":{},"id":"329951a5-3c44-4a8c-a6b9-64e2360f1398","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fd2bf34c-d2c4-4420-8558-bb5a99ee909b","type":"BoxAnnotation"},{"attributes":{},"id":"b81fa746-1add-47a5-b514-1683965f5ed7","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"586ced37-d0bc-4e65-9a8a-bb22cace2756","subtype":"Figure","type":"Plot"},"ticker":{"id":"640343be-3c28-46b2-8cb2-9b4f822b6103","type":"BasicTicker"}},"id":"2fe8bf22-117d-4916-b6f1-44ecf5fba6e1","type":"Grid"},{"attributes":{"child":{"id":"586ced37-d0bc-4e65-9a8a-bb22cace2756","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"465e485e-33f5-4ad4-8878-c03ba4795030","type":"Panel"},{"attributes":{"formatter":{"id":"329951a5-3c44-4a8c-a6b9-64e2360f1398","type":"BasicTickFormatter"},"plot":{"id":"586ced37-d0bc-4e65-9a8a-bb22cace2756","subtype":"Figure","type":"Plot"},"ticker":{"id":"609cda64-b11c-442c-8019-24af77fa5c8f","type":"BasicTicker"}},"id":"49031ed1-5f06-41ac-ac59-ea391d893338","type":"LinearAxis"},{"attributes":{"overlay":{"id":"fd2bf34c-d2c4-4420-8558-bb5a99ee909b","type":"BoxAnnotation"},"plot":{"id":"fc3b920b-e54c-4e5e-b075-a574038b9d98","subtype":"Figure","type":"Plot"}},"id":"17dbfed7-1766-4e10-968d-e50d67cc7a68","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"fc3b920b-e54c-4e5e-b075-a574038b9d98","subtype":"Figure","type":"Plot"}},"id":"4ddb9544-7a7a-4f5d-a87a-73a588b10f03","type":"HelpTool"},{"attributes":{},"id":"31cf1dc6-f18a-4b01-8cb5-0d44b8925ee2","type":"LinearScale"},{"attributes":{"callback":null},"id":"2cc0273a-275b-498e-adef-050fe7b36693","type":"DataRange1d"},{"attributes":{"overlay":{"id":"4493a068-f891-494d-9714-e54097db0c5e","type":"BoxAnnotation"},"plot":{"id":"586ced37-d0bc-4e65-9a8a-bb22cace2756","subtype":"Figure","type":"Plot"}},"id":"c3461115-b9a6-4176-952d-599dfd3e93ed","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"53160522-7cce-4014-a048-90802dfe0fb3","type":"BasicTickFormatter"},"plot":{"id":"fc3b920b-e54c-4e5e-b075-a574038b9d98","subtype":"Figure","type":"Plot"},"ticker":{"id":"4b729756-73a9-4064-b16f-e2f27f5590ae","type":"BasicTicker"}},"id":"4ab9fd31-3741-4dfc-ae0d-aa425cb94c01","type":"LinearAxis"},{"attributes":{},"id":"609cda64-b11c-442c-8019-24af77fa5c8f","type":"BasicTicker"},{"attributes":{},"id":"640343be-3c28-46b2-8cb2-9b4f822b6103","type":"BasicTicker"},{"attributes":{"plot":{"id":"fc3b920b-e54c-4e5e-b075-a574038b9d98","subtype":"Figure","type":"Plot"},"ticker":{"id":"abacb2e2-55de-44f3-b550-21c34b178fd2","type":"BasicTicker"}},"id":"62864ef9-472c-4079-8d25-54e7aef12d2c","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"8e08b9b8-0192-47b0-9fdd-87c97b55eefd","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"586ced37-d0bc-4e65-9a8a-bb22cace2756","subtype":"Figure","type":"Plot"},"ticker":{"id":"609cda64-b11c-442c-8019-24af77fa5c8f","type":"BasicTicker"}},"id":"8e21d50a-6f91-4a62-acba-bee3e2199271","type":"Grid"},{"attributes":{},"id":"abb40ff6-c8ae-4b57-9ff2-7bdcd4585b58","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"0bc8daab-b567-4794-bc10-8bb4048980e5","type":"DataRange1d"},{"attributes":{"child":{"id":"fc3b920b-e54c-4e5e-b075-a574038b9d98","subtype":"Figure","type":"Plot"},"title":"line"},"id":"8aa265ef-f618-44dd-baea-5049b142b1eb","type":"Panel"},{"attributes":{"callback":null,"tabs":[{"id":"465e485e-33f5-4ad4-8878-c03ba4795030","type":"Panel"},{"id":"8aa265ef-f618-44dd-baea-5049b142b1eb","type":"Panel"}]},"id":"6a4a390e-4afa-497b-bd2b-48677622be3e","type":"Tabs"},{"attributes":{},"id":"8703945d-7ba9-4214-b787-f52ba52b0d4d","type":"ToolEvents"},{"attributes":{"plot":null,"text":""},"id":"ceb6af1b-cf4b-4be8-9b2c-994a8698a99f","type":"Title"},{"attributes":{"plot":{"id":"fc3b920b-e54c-4e5e-b075-a574038b9d98","subtype":"Figure","type":"Plot"}},"id":"c3696571-b32c-4d7f-bf4f-504b0e64cf78","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"fc3b920b-e54c-4e5e-b075-a574038b9d98","subtype":"Figure","type":"Plot"},"ticker":{"id":"4b729756-73a9-4064-b16f-e2f27f5590ae","type":"BasicTicker"}},"id":"26e7a131-fa31-474a-9e43-413bc3d2d6e4","type":"Grid"},{"attributes":{},"id":"ba119df9-84e7-48dc-8467-5f7e761eda18","type":"LinearScale"},{"attributes":{"formatter":{"id":"abb40ff6-c8ae-4b57-9ff2-7bdcd4585b58","type":"BasicTickFormatter"},"plot":{"id":"fc3b920b-e54c-4e5e-b075-a574038b9d98","subtype":"Figure","type":"Plot"},"ticker":{"id":"abacb2e2-55de-44f3-b550-21c34b178fd2","type":"BasicTicker"}},"id":"f77470d9-3dad-42d0-99d9-b26369e36aee","type":"LinearAxis"},{"attributes":{},"id":"4b729756-73a9-4064-b16f-e2f27f5590ae","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"30602d64-8acf-452e-9251-88b66f1c6cb7","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"49031ed1-5f06-41ac-ac59-ea391d893338","type":"LinearAxis"}],"left":[{"id":"64f44849-26c2-4cb5-a5a0-d9af2c2045f2","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"49031ed1-5f06-41ac-ac59-ea391d893338","type":"LinearAxis"},{"id":"8e21d50a-6f91-4a62-acba-bee3e2199271","type":"Grid"},{"id":"64f44849-26c2-4cb5-a5a0-d9af2c2045f2","type":"LinearAxis"},{"id":"2fe8bf22-117d-4916-b6f1-44ecf5fba6e1","type":"Grid"},{"id":"4493a068-f891-494d-9714-e54097db0c5e","type":"BoxAnnotation"},{"id":"670c4ec3-0cc9-4df5-9a4d-bce6052e8923","type":"GlyphRenderer"}],"title":{"id":"ceb6af1b-cf4b-4be8-9b2c-994a8698a99f","type":"Title"},"tool_events":{"id":"8703945d-7ba9-4214-b787-f52ba52b0d4d","type":"ToolEvents"},"toolbar":{"id":"33be53a3-ebaa-4791-8a5d-9d65615d946d","type":"Toolbar"},"x_range":{"id":"7bf2ea01-f38a-495b-a51c-ebf4c69e6872","type":"DataRange1d"},"x_scale":{"id":"b81fa746-1add-47a5-b514-1683965f5ed7","type":"LinearScale"},"y_range":{"id":"0d04acc1-9219-47b9-8818-93237a9dab1c","type":"DataRange1d"},"y_scale":{"id":"31cf1dc6-f18a-4b01-8cb5-0d44b8925ee2","type":"LinearScale"}},"id":"586ced37-d0bc-4e65-9a8a-bb22cace2756","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"8e08b9b8-0192-47b0-9fdd-87c97b55eefd","type":"ColumnDataSource"},"glyph":{"id":"2f5b8729-7f02-4ea9-a329-d29206d8f32b","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fdbf4e3b-edb3-4302-a66a-6010a1cfd85d","type":"Line"},"selection_glyph":null},"id":"e78846c9-ba36-4264-8653-2c6afbfe8898","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"586ced37-d0bc-4e65-9a8a-bb22cace2756","subtype":"Figure","type":"Plot"}},"id":"ba9e77d6-5c3c-4fcf-8d75-4dcf0420b860","type":"ResetTool"},{"attributes":{"data_source":{"id":"30602d64-8acf-452e-9251-88b66f1c6cb7","type":"ColumnDataSource"},"glyph":{"id":"8648d02f-43bf-42cd-b3d4-ef67cfe1efaa","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"73bc878b-fcfb-4abb-9ebf-63f6b5015a59","type":"Circle"},"selection_glyph":null},"id":"670c4ec3-0cc9-4df5-9a4d-bce6052e8923","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9c3b97b2-e432-4a20-bc75-86a133cd15b8","type":"PanTool"},{"id":"930847ca-dc8f-4b14-bc03-7a72062853b9","type":"WheelZoomTool"},{"id":"17dbfed7-1766-4e10-968d-e50d67cc7a68","type":"BoxZoomTool"},{"id":"c3696571-b32c-4d7f-bf4f-504b0e64cf78","type":"SaveTool"},{"id":"ceddb2c1-6851-4d08-adc6-b3fc6b062df3","type":"ResetTool"},{"id":"4ddb9544-7a7a-4f5d-a87a-73a588b10f03","type":"HelpTool"}]},"id":"dcf32094-ec05-4694-839f-bb1769a3fcc0","type":"Toolbar"},{"attributes":{"plot":{"id":"586ced37-d0bc-4e65-9a8a-bb22cace2756","subtype":"Figure","type":"Plot"}},"id":"fadfb735-b2b7-4f26-9c03-357def3c9b45","type":"WheelZoomTool"},{"attributes":{},"id":"aacd98a9-3003-4d03-8767-3d34e38195c6","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"5fb7620f-53ec-4008-9816-81d5e634347e","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4493a068-f891-494d-9714-e54097db0c5e","type":"BoxAnnotation"},{"attributes":{},"id":"53160522-7cce-4014-a048-90802dfe0fb3","type":"BasicTickFormatter"},{"attributes":{},"id":"abacb2e2-55de-44f3-b550-21c34b178fd2","type":"BasicTicker"},{"attributes":{"plot":{"id":"fc3b920b-e54c-4e5e-b075-a574038b9d98","subtype":"Figure","type":"Plot"}},"id":"ceddb2c1-6851-4d08-adc6-b3fc6b062df3","type":"ResetTool"}],"root_ids":["6a4a390e-4afa-497b-bd2b-48677622be3e"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"53b6cd0f-9d13-4cd5-a54f-b115c0fa5942","elementid":"5d7c32a0-3d85-448d-9298-0f2243f74ab1","modelid":"6a4a390e-4afa-497b-bd2b-48677622be3e"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
