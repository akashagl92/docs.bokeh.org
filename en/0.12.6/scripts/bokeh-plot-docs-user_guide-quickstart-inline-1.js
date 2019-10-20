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
      };var element = document.getElementById("57ac19f3-909c-4b7b-9735-8631f848f2ac");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '57ac19f3-909c-4b7b-9735-8631f848f2ac' but no matching script tag was found. ")
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
                var docs_json = {"3eb9d853-13a9-4924-a83b-12a634b66c2c":{"roots":{"references":[{"attributes":{"data_source":{"id":"6906cdc6-38b0-46e9-9b4d-f1dc8a794b4f","type":"ColumnDataSource"},"glyph":{"id":"e4774c93-6db3-4d1b-9d74-c2186938775c","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2cb90382-e5ca-4593-beda-df2c31e3489a","type":"Line"},"selection_glyph":null},"id":"0e830e15-115d-4054-ad6a-cce78250893c","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"1eed340a-ced3-4c22-a4c8-7a2ca13fe8a6","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"6f20646e-2137-48af-a15f-8b91794b878a","type":"Circle"},{"attributes":{"axis_label":"sections","formatter":{"id":"25923623-7eb0-45e1-9f7a-230aa9f30b18","type":"BasicTickFormatter"},"plot":{"id":"6984bb3b-a75f-4a93-b914-0e1100b4d8e9","subtype":"Figure","type":"Plot"},"ticker":{"id":"8cf7f397-139d-4781-8f2e-2a581a77ec65","type":"BasicTicker"}},"id":"718916fe-374c-4082-ad0b-c863905060fd","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"039ffce1-3b7e-43c9-9583-f288919d7197","type":"Circle"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.010000000000000002,0.25,1.0,2.25,4.0,6.25,9.0]}},"id":"7887f24a-d377-4c07-bdca-264a38ead9f1","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"log axis example"},"id":"14f87430-4d7e-46be-b566-d2d91f58c769","type":"Title"},{"attributes":{},"id":"25923623-7eb0-45e1-9f7a-230aa9f30b18","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5d68cf42-1298-48e7-90d6-c3e58f044d3f","type":"Line"},{"attributes":{},"id":"d3059dc5-4ae7-49ee-9bed-e6371ac3b2fd","type":"LinearScale"},{"attributes":{"ticker":null},"id":"4af64dbe-c212-4bf9-b056-dd6defd25131","type":"LogTickFormatter"},{"attributes":{"data_source":{"id":"7887f24a-d377-4c07-bdca-264a38ead9f1","type":"ColumnDataSource"},"glyph":{"id":"ee46008b-3986-409f-b9f8-930e12dc7673","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"66032b29-56f9-4dc4-8f5f-8403622b9c6d","type":"Line"},"selection_glyph":null},"id":"751fe474-66ab-41c1-9d2c-bb17d41153f4","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e10cd74e-f693-4526-a6dc-ab17929a07db","type":"PanTool"},{"id":"d9186d12-2ec0-4bdb-8fac-f2efee0805c8","type":"BoxZoomTool"},{"id":"642c30c4-7e3e-4f1f-95e1-b25ba577b880","type":"ResetTool"},{"id":"8b0cfbe1-4115-43af-a9dc-47af7404da2f","type":"SaveTool"}]},"id":"02caffa5-d2c8-41ea-9d89-36a28ea3d1ca","type":"Toolbar"},{"attributes":{},"id":"8cf7f397-139d-4781-8f2e-2a581a77ec65","type":"BasicTicker"},{"attributes":{"plot":{"id":"6984bb3b-a75f-4a93-b914-0e1100b4d8e9","subtype":"Figure","type":"Plot"}},"id":"8b0cfbe1-4115-43af-a9dc-47af7404da2f","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]}},"id":"9079128d-b992-4d16-b205-c4be98aa7865","type":"ColumnDataSource"},{"attributes":{"label":{"value":"y=x^2"},"renderers":[{"id":"751fe474-66ab-41c1-9d2c-bb17d41153f4","type":"GlyphRenderer"}]},"id":"7c1de158-f838-4829-8970-d1b2b228c5b4","type":"LegendItem"},{"attributes":{"callback":null},"id":"a4348876-a891-4fb1-8fb8-97734e5ad2aa","type":"DataRange1d"},{"attributes":{"num_minor_ticks":10},"id":"a8e3c866-3774-478c-a8da-0c9259867d88","type":"LogTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"c4d3944c-e812-46f6-b35d-e0a102ec60d7","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"d5870b7e-d418-4d14-87bf-f8bcc779d798","type":"ColumnDataSource"},"glyph":{"id":"039ffce1-3b7e-43c9-9583-f288919d7197","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"50b7ccc6-3a93-41d7-9f70-8e6317bc98d2","type":"Circle"},"selection_glyph":null},"id":"d4439ec5-3f8f-44d7-bf29-44cf9c021a6b","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"6984bb3b-a75f-4a93-b914-0e1100b4d8e9","subtype":"Figure","type":"Plot"}},"id":"642c30c4-7e3e-4f1f-95e1-b25ba577b880","type":"ResetTool"},{"attributes":{"callback":null,"end":100000000000,"start":0.001},"id":"cdd890f9-d4e9-4792-9fa9-e2cf7606a89d","type":"Range1d"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]}},"id":"d5870b7e-d418-4d14-87bf-f8bcc779d798","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.023292992280754,1.7782794100389228,10.0,177.82794100389228,10000.0,1778279.410038923,1000000000.0]}},"id":"d8155cf2-b517-4ebd-b20a-04fcd2677c6c","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"7bbbe1b3-f950-4d8b-970d-696c940c65a2","type":"BoxAnnotation"},"plot":{"id":"6984bb3b-a75f-4a93-b914-0e1100b4d8e9","subtype":"Figure","type":"Plot"}},"id":"d9186d12-2ec0-4bdb-8fac-f2efee0805c8","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"c4d3944c-e812-46f6-b35d-e0a102ec60d7","type":"ColumnDataSource"},"glyph":{"id":"45480dfe-a042-4704-82e8-c8c83acc05fd","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6f20646e-2137-48af-a15f-8b91794b878a","type":"Circle"},"selection_glyph":null},"id":"1ae91238-3fa7-40c0-980d-9945f0f62485","type":"GlyphRenderer"},{"attributes":{"label":{"value":"y=10^x^2"},"renderers":[{"id":"2eafad7e-712c-400d-b07c-40c7cb929d47","type":"GlyphRenderer"}]},"id":"62c5ec74-f108-4903-8738-e5f9188e6d1a","type":"LegendItem"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"ee46008b-3986-409f-b9f8-930e12dc7673","type":"Line"},{"attributes":{"label":{"value":"y=10^x"},"renderers":[{"id":"0e830e15-115d-4054-ad6a-cce78250893c","type":"GlyphRenderer"},{"id":"1ae91238-3fa7-40c0-980d-9945f0f62485","type":"GlyphRenderer"}]},"id":"619196ae-bf81-4f0b-bb59-0f8e576daf51","type":"LegendItem"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7bbbe1b3-f950-4d8b-970d-696c940c65a2","type":"BoxAnnotation"},{"attributes":{"label":{"value":"y=x"},"renderers":[{"id":"564fa25f-c9af-4ace-8ea9-5e69086b90aa","type":"GlyphRenderer"},{"id":"d4439ec5-3f8f-44d7-bf29-44cf9c021a6b","type":"GlyphRenderer"}]},"id":"f6ef4f92-2cfe-4b70-83af-79cef1e0c3e0","type":"LegendItem"},{"attributes":{"dimension":1,"plot":{"id":"6984bb3b-a75f-4a93-b914-0e1100b4d8e9","subtype":"Figure","type":"Plot"},"ticker":{"id":"a8e3c866-3774-478c-a8da-0c9259867d88","type":"LogTicker"}},"id":"ce44af2c-1531-4a9e-88d1-dbed0d21be9a","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"50b7ccc6-3a93-41d7-9f70-8e6317bc98d2","type":"Circle"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2cb90382-e5ca-4593-beda-df2c31e3489a","type":"Line"},{"attributes":{"below":[{"id":"718916fe-374c-4082-ad0b-c863905060fd","type":"LinearAxis"}],"left":[{"id":"d7394dfc-7ad0-4fa1-9ce8-0133e6a03466","type":"LogAxis"}],"renderers":[{"id":"718916fe-374c-4082-ad0b-c863905060fd","type":"LinearAxis"},{"id":"f95c99c6-ffbb-4666-b457-d1d7f865c305","type":"Grid"},{"id":"d7394dfc-7ad0-4fa1-9ce8-0133e6a03466","type":"LogAxis"},{"id":"ce44af2c-1531-4a9e-88d1-dbed0d21be9a","type":"Grid"},{"id":"7bbbe1b3-f950-4d8b-970d-696c940c65a2","type":"BoxAnnotation"},{"id":"47ff36ba-4ed9-4587-a001-25e3a1a9512e","type":"Legend"},{"id":"564fa25f-c9af-4ace-8ea9-5e69086b90aa","type":"GlyphRenderer"},{"id":"d4439ec5-3f8f-44d7-bf29-44cf9c021a6b","type":"GlyphRenderer"},{"id":"751fe474-66ab-41c1-9d2c-bb17d41153f4","type":"GlyphRenderer"},{"id":"0e830e15-115d-4054-ad6a-cce78250893c","type":"GlyphRenderer"},{"id":"1ae91238-3fa7-40c0-980d-9945f0f62485","type":"GlyphRenderer"},{"id":"2eafad7e-712c-400d-b07c-40c7cb929d47","type":"GlyphRenderer"}],"title":{"id":"14f87430-4d7e-46be-b566-d2d91f58c769","type":"Title"},"tool_events":{"id":"63ea8506-a446-460d-bce5-017c64417439","type":"ToolEvents"},"toolbar":{"id":"02caffa5-d2c8-41ea-9d89-36a28ea3d1ca","type":"Toolbar"},"x_range":{"id":"a4348876-a891-4fb1-8fb8-97734e5ad2aa","type":"DataRange1d"},"x_scale":{"id":"d3059dc5-4ae7-49ee-9bed-e6371ac3b2fd","type":"LinearScale"},"y_range":{"id":"cdd890f9-d4e9-4792-9fa9-e2cf7606a89d","type":"Range1d"},"y_scale":{"id":"ff7ddbf2-5159-410a-95b3-60cd1fc5801d","type":"LogScale"}},"id":"6984bb3b-a75f-4a93-b914-0e1100b4d8e9","subtype":"Figure","type":"Plot"},{"attributes":{"items":[{"id":"f6ef4f92-2cfe-4b70-83af-79cef1e0c3e0","type":"LegendItem"},{"id":"7c1de158-f838-4829-8970-d1b2b228c5b4","type":"LegendItem"},{"id":"619196ae-bf81-4f0b-bb59-0f8e576daf51","type":"LegendItem"},{"id":"62c5ec74-f108-4903-8738-e5f9188e6d1a","type":"LegendItem"}],"plot":{"id":"6984bb3b-a75f-4a93-b914-0e1100b4d8e9","subtype":"Figure","type":"Plot"}},"id":"47ff36ba-4ed9-4587-a001-25e3a1a9512e","type":"Legend"},{"attributes":{"axis_label":"particles","formatter":{"id":"4af64dbe-c212-4bf9-b056-dd6defd25131","type":"LogTickFormatter"},"plot":{"id":"6984bb3b-a75f-4a93-b914-0e1100b4d8e9","subtype":"Figure","type":"Plot"},"ticker":{"id":"a8e3c866-3774-478c-a8da-0c9259867d88","type":"LogTicker"}},"id":"d7394dfc-7ad0-4fa1-9ce8-0133e6a03466","type":"LogAxis"},{"attributes":{"line_color":{"value":"orange"},"line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"95f9fbca-3bca-4e23-af3e-bc5c076a114d","type":"Line"},{"attributes":{"data_source":{"id":"d8155cf2-b517-4ebd-b20a-04fcd2677c6c","type":"ColumnDataSource"},"glyph":{"id":"95f9fbca-3bca-4e23-af3e-bc5c076a114d","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1eed340a-ced3-4c22-a4c8-7a2ca13fe8a6","type":"Line"},"selection_glyph":null},"id":"2eafad7e-712c-400d-b07c-40c7cb929d47","type":"GlyphRenderer"},{"attributes":{},"id":"ff7ddbf2-5159-410a-95b3-60cd1fc5801d","type":"LogScale"},{"attributes":{"plot":{"id":"6984bb3b-a75f-4a93-b914-0e1100b4d8e9","subtype":"Figure","type":"Plot"}},"id":"e10cd74e-f693-4526-a6dc-ab17929a07db","type":"PanTool"},{"attributes":{},"id":"63ea8506-a446-460d-bce5-017c64417439","type":"ToolEvents"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"66032b29-56f9-4dc4-8f5f-8403622b9c6d","type":"Line"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"6906cdc6-38b0-46e9-9b4d-f1dc8a794b4f","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"45480dfe-a042-4704-82e8-c8c83acc05fd","type":"Circle"},{"attributes":{"plot":{"id":"6984bb3b-a75f-4a93-b914-0e1100b4d8e9","subtype":"Figure","type":"Plot"},"ticker":{"id":"8cf7f397-139d-4781-8f2e-2a581a77ec65","type":"BasicTicker"}},"id":"f95c99c6-ffbb-4666-b457-d1d7f865c305","type":"Grid"},{"attributes":{"data_source":{"id":"9079128d-b992-4d16-b205-c4be98aa7865","type":"ColumnDataSource"},"glyph":{"id":"66cfbbd1-387d-4398-b573-fb2c91d36d33","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5d68cf42-1298-48e7-90d6-c3e58f044d3f","type":"Line"},"selection_glyph":null},"id":"564fa25f-c9af-4ace-8ea9-5e69086b90aa","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"red"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e4774c93-6db3-4d1b-9d74-c2186938775c","type":"Line"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"66cfbbd1-387d-4398-b573-fb2c91d36d33","type":"Line"}],"root_ids":["6984bb3b-a75f-4a93-b914-0e1100b4d8e9"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"3eb9d853-13a9-4924-a83b-12a634b66c2c","elementid":"57ac19f3-909c-4b7b-9735-8631f848f2ac","modelid":"6984bb3b-a75f-4a93-b914-0e1100b4d8e9"}];
                
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
