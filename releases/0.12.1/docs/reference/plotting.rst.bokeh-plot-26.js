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
      };var element = document.getElementById("869b3962-d4b6-4b5b-b077-6186470b064b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '869b3962-d4b6-4b5b-b077-6186470b064b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"6e95699d-36ff-4334-b441-62676226c187":{"roots":{"references":[{"attributes":{"below":[{"id":"609c8dcf-d606-4f3a-9c0e-d2481d7ed2cb","type":"LinearAxis"}],"left":[{"id":"72690403-68dc-4649-b300-b5139bfece6c","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"609c8dcf-d606-4f3a-9c0e-d2481d7ed2cb","type":"LinearAxis"},{"id":"f51528b1-3bad-4dbe-b4fd-bc14c9c90f9a","type":"Grid"},{"id":"72690403-68dc-4649-b300-b5139bfece6c","type":"LinearAxis"},{"id":"995fda87-38b4-47e2-8697-a9ee41837379","type":"Grid"},{"id":"ee6668b2-b0a4-4c5e-9382-4f862fa1729c","type":"BoxAnnotation"},{"id":"55e79540-613d-41f8-bdea-4125c8f76363","type":"GlyphRenderer"}],"title":{"id":"d326d454-90bb-43b6-9a24-3a1854632f61","type":"Title"},"tool_events":{"id":"b1e5e730-6f91-4120-9e5a-f724f845f91d","type":"ToolEvents"},"toolbar":{"id":"59618b79-caf4-4f16-a019-54c54f511cf7","type":"Toolbar"},"x_range":{"id":"33285440-79c3-4bce-8296-8525fa481a3e","type":"DataRange1d"},"y_range":{"id":"8b4461c8-310f-485b-83eb-b64d6f38a26f","type":"DataRange1d"}},"id":"e89a54ef-15df-48cc-b4f6-c6535fb92b4e","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"e89a54ef-15df-48cc-b4f6-c6535fb92b4e","subtype":"Figure","type":"Plot"},"ticker":{"id":"57393825-f718-4934-abda-aeaf48c99053","type":"BasicTicker"}},"id":"995fda87-38b4-47e2-8697-a9ee41837379","type":"Grid"},{"attributes":{},"id":"1e10b71b-4224-4b9e-a8e2-5851ef7cc0a2","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ee6668b2-b0a4-4c5e-9382-4f862fa1729c","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"33285440-79c3-4bce-8296-8525fa481a3e","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2bf50075-1f75-40da-8071-21f5c462a306","type":"X"},{"attributes":{"callback":null},"id":"8b4461c8-310f-485b-83eb-b64d6f38a26f","type":"DataRange1d"},{"attributes":{},"id":"a490ee98-ec33-40bf-8d5f-145a1646b300","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"b1cf319d-f0aa-4c45-aa7e-fcb8d72c1be2","type":"ColumnDataSource"},"glyph":{"id":"10a2cb58-49cd-4ad1-8cbd-1b699989a7f1","type":"X"},"hover_glyph":null,"nonselection_glyph":{"id":"2bf50075-1f75-40da-8071-21f5c462a306","type":"X"},"selection_glyph":null},"id":"55e79540-613d-41f8-bdea-4125c8f76363","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"e89a54ef-15df-48cc-b4f6-c6535fb92b4e","subtype":"Figure","type":"Plot"}},"id":"77fb734c-7fcd-454d-a14d-2d2f6bc29a59","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"a490ee98-ec33-40bf-8d5f-145a1646b300","type":"BasicTickFormatter"},"plot":{"id":"e89a54ef-15df-48cc-b4f6-c6535fb92b4e","subtype":"Figure","type":"Plot"},"ticker":{"id":"b7ad8079-29f8-4e68-a3eb-0bb15eea85bb","type":"BasicTicker"}},"id":"609c8dcf-d606-4f3a-9c0e-d2481d7ed2cb","type":"LinearAxis"},{"attributes":{"plot":{"id":"e89a54ef-15df-48cc-b4f6-c6535fb92b4e","subtype":"Figure","type":"Plot"},"ticker":{"id":"b7ad8079-29f8-4e68-a3eb-0bb15eea85bb","type":"BasicTicker"}},"id":"f51528b1-3bad-4dbe-b4fd-bc14c9c90f9a","type":"Grid"},{"attributes":{},"id":"b1e5e730-6f91-4120-9e5a-f724f845f91d","type":"ToolEvents"},{"attributes":{"fill_color":{"value":"#fa9fb5"},"line_color":{"value":"#fa9fb5"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"10a2cb58-49cd-4ad1-8cbd-1b699989a7f1","type":"X"},{"attributes":{"plot":null,"text":null},"id":"d326d454-90bb-43b6-9a24-3a1854632f61","type":"Title"},{"attributes":{"plot":{"id":"e89a54ef-15df-48cc-b4f6-c6535fb92b4e","subtype":"Figure","type":"Plot"}},"id":"3615f5e8-83e2-46f5-a47c-cc2d332a4c6b","type":"PanTool"},{"attributes":{},"id":"57393825-f718-4934-abda-aeaf48c99053","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"b1cf319d-f0aa-4c45-aa7e-fcb8d72c1be2","type":"ColumnDataSource"},{"attributes":{},"id":"b7ad8079-29f8-4e68-a3eb-0bb15eea85bb","type":"BasicTicker"},{"attributes":{"plot":{"id":"e89a54ef-15df-48cc-b4f6-c6535fb92b4e","subtype":"Figure","type":"Plot"}},"id":"7e8e72be-9e78-495f-a387-8e5aeef5b608","type":"HelpTool"},{"attributes":{"plot":{"id":"e89a54ef-15df-48cc-b4f6-c6535fb92b4e","subtype":"Figure","type":"Plot"}},"id":"59409157-b986-43cb-9323-ad5d5065b435","type":"SaveTool"},{"attributes":{"formatter":{"id":"1e10b71b-4224-4b9e-a8e2-5851ef7cc0a2","type":"BasicTickFormatter"},"plot":{"id":"e89a54ef-15df-48cc-b4f6-c6535fb92b4e","subtype":"Figure","type":"Plot"},"ticker":{"id":"57393825-f718-4934-abda-aeaf48c99053","type":"BasicTicker"}},"id":"72690403-68dc-4649-b300-b5139bfece6c","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3615f5e8-83e2-46f5-a47c-cc2d332a4c6b","type":"PanTool"},{"id":"77fb734c-7fcd-454d-a14d-2d2f6bc29a59","type":"WheelZoomTool"},{"id":"3ab786f3-ce7c-4370-b6ce-374da1a9b004","type":"BoxZoomTool"},{"id":"59409157-b986-43cb-9323-ad5d5065b435","type":"SaveTool"},{"id":"1b1d077a-6fa4-4ce8-8548-0997720b933f","type":"ResetTool"},{"id":"7e8e72be-9e78-495f-a387-8e5aeef5b608","type":"HelpTool"}]},"id":"59618b79-caf4-4f16-a019-54c54f511cf7","type":"Toolbar"},{"attributes":{"plot":{"id":"e89a54ef-15df-48cc-b4f6-c6535fb92b4e","subtype":"Figure","type":"Plot"}},"id":"1b1d077a-6fa4-4ce8-8548-0997720b933f","type":"ResetTool"},{"attributes":{"overlay":{"id":"ee6668b2-b0a4-4c5e-9382-4f862fa1729c","type":"BoxAnnotation"},"plot":{"id":"e89a54ef-15df-48cc-b4f6-c6535fb92b4e","subtype":"Figure","type":"Plot"}},"id":"3ab786f3-ce7c-4370-b6ce-374da1a9b004","type":"BoxZoomTool"}],"root_ids":["e89a54ef-15df-48cc-b4f6-c6535fb92b4e"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"6e95699d-36ff-4334-b441-62676226c187","elementid":"869b3962-d4b6-4b5b-b077-6186470b064b","modelid":"e89a54ef-15df-48cc-b4f6-c6535fb92b4e"}];
              
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