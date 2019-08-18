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
      };var element = document.getElementById("eaf27513-983c-4637-98c9-e5d02b476470");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'eaf27513-983c-4637-98c9-e5d02b476470' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"82a89858-3b6c-44f5-8bad-49500c7f7c71":{"roots":{"references":[{"attributes":{"plot":null,"text":null},"id":"6f1e1c0e-85ab-4d98-b6a4-10c58616dfc6","type":"Title"},{"attributes":{},"id":"c7d98e27-6690-4022-8e77-cc6afb703bea","type":"ToolEvents"},{"attributes":{"plot":{"id":"7372e462-7328-4875-8af1-9b865da3c603","subtype":"Figure","type":"Plot"}},"id":"05f4d972-3989-436e-8705-847b9daa9d0f","type":"HelpTool"},{"attributes":{"plot":{"id":"7372e462-7328-4875-8af1-9b865da3c603","subtype":"Figure","type":"Plot"}},"id":"bc81433c-bfbf-4ba4-9272-efc4a50943fd","type":"PanTool"},{"attributes":{"plot":{"id":"7372e462-7328-4875-8af1-9b865da3c603","subtype":"Figure","type":"Plot"},"ticker":{"id":"ef64d04c-c64d-4e63-bd39-6b1c465f9b9b","type":"BasicTicker"}},"id":"0da2feca-94b1-4868-8848-300f7eb3de15","type":"Grid"},{"attributes":{"formatter":{"id":"34a4fe58-558f-41b6-9fc0-50b000183164","type":"BasicTickFormatter"},"plot":{"id":"7372e462-7328-4875-8af1-9b865da3c603","subtype":"Figure","type":"Plot"},"ticker":{"id":"94ccc55f-91b0-40c7-bcad-320cba3feba0","type":"BasicTicker"}},"id":"be9d167d-206e-4ccd-aa19-f19eb5ca655e","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"84225b41-3c0c-4390-9726-d5b316414043","type":"BoxAnnotation"},{"attributes":{},"id":"94ccc55f-91b0-40c7-bcad-320cba3feba0","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"53e27ecf-c959-4309-950e-08690f0499fb","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"7372e462-7328-4875-8af1-9b865da3c603","subtype":"Figure","type":"Plot"}},"id":"52b03bac-3900-413a-bff7-7e283490889d","type":"SaveTool"},{"attributes":{},"id":"702cfa44-f1f6-4a6a-86ed-b0f30aff92af","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"7372e462-7328-4875-8af1-9b865da3c603","subtype":"Figure","type":"Plot"}},"id":"033c9324-48c4-446e-a49c-58b79b033e95","type":"ResetTool"},{"attributes":{},"id":"34a4fe58-558f-41b6-9fc0-50b000183164","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"29b84a74-adb5-4ecf-b487-d5aefaf528c4","type":"DataRange1d"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"screen","value":15},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"67964a45-4618-4baf-a019-522b7f808725","type":"Wedge"},{"attributes":{"callback":null},"id":"97af24da-8170-4430-af2d-cf71092b6573","type":"DataRange1d"},{"attributes":{"overlay":{"id":"84225b41-3c0c-4390-9726-d5b316414043","type":"BoxAnnotation"},"plot":{"id":"7372e462-7328-4875-8af1-9b865da3c603","subtype":"Figure","type":"Plot"}},"id":"afab79f3-35d2-49e3-a9f1-da21aad34522","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"7372e462-7328-4875-8af1-9b865da3c603","subtype":"Figure","type":"Plot"}},"id":"a89f1415-7ee5-4aa1-b3f7-01b47621bf70","type":"WheelZoomTool"},{"attributes":{},"id":"ef64d04c-c64d-4e63-bd39-6b1c465f9b9b","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"7372e462-7328-4875-8af1-9b865da3c603","subtype":"Figure","type":"Plot"},"ticker":{"id":"94ccc55f-91b0-40c7-bcad-320cba3feba0","type":"BasicTicker"}},"id":"e91ecc5e-05ad-491a-9245-67dad63d4b52","type":"Grid"},{"attributes":{"data_source":{"id":"53e27ecf-c959-4309-950e-08690f0499fb","type":"ColumnDataSource"},"glyph":{"id":"adbec3de-a6ea-4387-9464-b72772aa4fc8","type":"Wedge"},"hover_glyph":null,"nonselection_glyph":{"id":"67964a45-4618-4baf-a019-522b7f808725","type":"Wedge"},"selection_glyph":null},"id":"bbfc990a-b68d-4bb8-a39b-98c523cb71d7","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"702cfa44-f1f6-4a6a-86ed-b0f30aff92af","type":"BasicTickFormatter"},"plot":{"id":"7372e462-7328-4875-8af1-9b865da3c603","subtype":"Figure","type":"Plot"},"ticker":{"id":"ef64d04c-c64d-4e63-bd39-6b1c465f9b9b","type":"BasicTicker"}},"id":"e7f0b056-ea3e-4e65-a324-2ea96c1058a4","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"bc81433c-bfbf-4ba4-9272-efc4a50943fd","type":"PanTool"},{"id":"a89f1415-7ee5-4aa1-b3f7-01b47621bf70","type":"WheelZoomTool"},{"id":"afab79f3-35d2-49e3-a9f1-da21aad34522","type":"BoxZoomTool"},{"id":"52b03bac-3900-413a-bff7-7e283490889d","type":"SaveTool"},{"id":"033c9324-48c4-446e-a49c-58b79b033e95","type":"ResetTool"},{"id":"05f4d972-3989-436e-8705-847b9daa9d0f","type":"HelpTool"}]},"id":"919d4aa0-72ad-4a9f-bbba-012ea20733ca","type":"Toolbar"},{"attributes":{"below":[{"id":"e7f0b056-ea3e-4e65-a324-2ea96c1058a4","type":"LinearAxis"}],"left":[{"id":"be9d167d-206e-4ccd-aa19-f19eb5ca655e","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"e7f0b056-ea3e-4e65-a324-2ea96c1058a4","type":"LinearAxis"},{"id":"0da2feca-94b1-4868-8848-300f7eb3de15","type":"Grid"},{"id":"be9d167d-206e-4ccd-aa19-f19eb5ca655e","type":"LinearAxis"},{"id":"e91ecc5e-05ad-491a-9245-67dad63d4b52","type":"Grid"},{"id":"84225b41-3c0c-4390-9726-d5b316414043","type":"BoxAnnotation"},{"id":"bbfc990a-b68d-4bb8-a39b-98c523cb71d7","type":"GlyphRenderer"}],"title":{"id":"6f1e1c0e-85ab-4d98-b6a4-10c58616dfc6","type":"Title"},"tool_events":{"id":"c7d98e27-6690-4022-8e77-cc6afb703bea","type":"ToolEvents"},"toolbar":{"id":"919d4aa0-72ad-4a9f-bbba-012ea20733ca","type":"Toolbar"},"x_range":{"id":"29b84a74-adb5-4ecf-b487-d5aefaf528c4","type":"DataRange1d"},"y_range":{"id":"97af24da-8170-4430-af2d-cf71092b6573","type":"DataRange1d"}},"id":"7372e462-7328-4875-8af1-9b865da3c603","subtype":"Figure","type":"Plot"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#2b8cbe"},"line_color":{"value":"#2b8cbe"},"radius":{"units":"screen","value":15},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"adbec3de-a6ea-4387-9464-b72772aa4fc8","type":"Wedge"}],"root_ids":["7372e462-7328-4875-8af1-9b865da3c603"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"82a89858-3b6c-44f5-8bad-49500c7f7c71","elementid":"eaf27513-983c-4637-98c9-e5d02b476470","modelid":"7372e462-7328-4875-8af1-9b865da3c603"}];
              
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