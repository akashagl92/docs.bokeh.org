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
      };var element = document.getElementById("1c21652c-7040-4c92-8b8b-02c7a689f813");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1c21652c-7040-4c92-8b8b-02c7a689f813' but no matching script tag was found. ")
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
                var docs_json = {"1a6fd6c9-97f5-44c6-bf0a-b21e890a7c33":{"roots":{"references":[{"attributes":{"plot":{"id":"d4fc6253-26e3-4688-87fb-9f14c5ae3356","subtype":"Chart","type":"Plot"}},"id":"f175d6df-f742-492e-a904-207e31915223","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"d4fc6253-26e3-4688-87fb-9f14c5ae3356","subtype":"Chart","type":"Plot"},"ticker":{"id":"f310c8f1-c00f-4413-b04a-c9d31fdd2a0d","type":"BasicTicker"}},"id":"adcf6c2b-60b8-4cd6-b19a-cee84e27bc65","type":"Grid"},{"attributes":{"data_source":{"id":"68b5d730-eb99-4cc0-a03c-ca429509d7b0","type":"ColumnDataSource"},"glyph":{"id":"3efac766-13e2-4642-beb2-d773b70f6e84","type":"Line"},"hover_glyph":null,"muted_glyph":null},"id":"bd86a1c4-c7bb-4c12-8e69-8a69bf92d2b7","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"}],"series":["jython","jython","jython","jython","jython","jython","jython","jython","jython","jython","jython","jython","jython","jython"],"x_values":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"y_values":[22,43,10,25,26,101,114,203,194,215,201,227,139,160]}},"id":"9e52c928-257f-4473-a3c3-a9abba3b514f","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":293.5,"start":-24.5},"id":"791c23ea-68b4-4a50-9db5-dc567cb78f58","type":"Range1d"},{"attributes":{"label":{"value":"pypy"},"renderers":[{"id":"9ff83175-3d45-457c-b29a-8b156cfebed3","type":"GlyphRenderer"}]},"id":"2e02838e-5337-4a1a-89ee-1e0f42a43d28","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"}],"series":["pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy"],"x_values":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"y_values":[12,33,47,15,126,121,144,233,254,225,226,267,110,130]}},"id":"f6078627-beaa-43bb-8dd5-96869dcdabd1","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":14.3,"start":-1.3},"id":"a53d7e58-2bcf-40f7-9395-d7e64d9f5992","type":"Range1d"},{"attributes":{"plot":{"id":"d4fc6253-26e3-4688-87fb-9f14c5ae3356","subtype":"Chart","type":"Plot"},"ticker":{"id":"3ad9684f-d769-4252-a7df-7845f59a6869","type":"BasicTicker"}},"id":"41bf5bad-1541-4281-a151-a1af73075822","type":"Grid"},{"attributes":{"data_source":{"id":"9e52c928-257f-4473-a3c3-a9abba3b514f","type":"ColumnDataSource"},"glyph":{"id":"b2c55b7d-7ba7-4d54-b5ec-3b89ae83ba2a","type":"Line"},"hover_glyph":null,"muted_glyph":null},"id":"fe134666-d238-4fac-ac18-1ca5599128ba","type":"GlyphRenderer"},{"attributes":{},"id":"dd08aca8-89bf-4f22-98b1-b9df3b379c7d","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"f6078627-beaa-43bb-8dd5-96869dcdabd1","type":"ColumnDataSource"},"glyph":{"id":"623a5143-351e-4646-b520-3f173289671f","type":"Line"},"hover_glyph":null,"muted_glyph":null},"id":"9ff83175-3d45-457c-b29a-8b156cfebed3","type":"GlyphRenderer"},{"attributes":{"axis_label":"index","formatter":{"id":"dd08aca8-89bf-4f22-98b1-b9df3b379c7d","type":"BasicTickFormatter"},"plot":{"id":"d4fc6253-26e3-4688-87fb-9f14c5ae3356","subtype":"Chart","type":"Plot"},"ticker":{"id":"3ad9684f-d769-4252-a7df-7845f59a6869","type":"BasicTicker"}},"id":"2379b452-a121-44f7-8510-d031c9d81f9d","type":"LinearAxis"},{"attributes":{},"id":"f7a28065-3048-40ce-8a86-749c53fc95fb","type":"ToolEvents"},{"attributes":{"overlay":{"id":"ea3dc1e8-d56d-4516-a4e2-3cac071a8db9","type":"BoxAnnotation"},"plot":{"id":"d4fc6253-26e3-4688-87fb-9f14c5ae3356","subtype":"Chart","type":"Plot"}},"id":"76ab27d6-7ec3-4b40-8402-1ec2bc44fc13","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"2379b452-a121-44f7-8510-d031c9d81f9d","type":"LinearAxis"}],"css_classes":null,"height":400,"left":[{"id":"082195d8-6811-4642-a5eb-75d075e34e37","type":"LinearAxis"}],"renderers":[{"id":"ea3dc1e8-d56d-4516-a4e2-3cac071a8db9","type":"BoxAnnotation"},{"id":"bd86a1c4-c7bb-4c12-8e69-8a69bf92d2b7","type":"GlyphRenderer"},{"id":"9ff83175-3d45-457c-b29a-8b156cfebed3","type":"GlyphRenderer"},{"id":"fe134666-d238-4fac-ac18-1ca5599128ba","type":"GlyphRenderer"},{"id":"eb5b8ec6-0eae-49db-afed-a80d77ad3819","type":"Legend"},{"id":"2379b452-a121-44f7-8510-d031c9d81f9d","type":"LinearAxis"},{"id":"082195d8-6811-4642-a5eb-75d075e34e37","type":"LinearAxis"},{"id":"41bf5bad-1541-4281-a151-a1af73075822","type":"Grid"},{"id":"adcf6c2b-60b8-4cd6-b19a-cee84e27bc65","type":"Grid"}],"title":{"id":"d75478df-0e39-419b-91d4-a260f36c1f11","type":"Title"},"tool_events":{"id":"f7a28065-3048-40ce-8a86-749c53fc95fb","type":"ToolEvents"},"toolbar":{"id":"657592b6-7621-403b-958b-19d29dcd29f5","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"a53d7e58-2bcf-40f7-9395-d7e64d9f5992","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"791c23ea-68b4-4a50-9db5-dc567cb78f58","type":"Range1d"}},"id":"d4fc6253-26e3-4688-87fb-9f14c5ae3356","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"d4fc6253-26e3-4688-87fb-9f14c5ae3356","subtype":"Chart","type":"Plot"}},"id":"9296da1a-57cf-4bcf-b160-0361f053faf6","type":"SaveTool"},{"attributes":{"axis_label":"Duration","formatter":{"id":"678f8687-e41d-4530-873d-f0e0c5b2f157","type":"BasicTickFormatter"},"plot":{"id":"d4fc6253-26e3-4688-87fb-9f14c5ae3356","subtype":"Chart","type":"Plot"},"ticker":{"id":"f310c8f1-c00f-4413-b04a-c9d31fdd2a0d","type":"BasicTicker"}},"id":"082195d8-6811-4642-a5eb-75d075e34e37","type":"LinearAxis"},{"attributes":{"label":{"value":"python"},"renderers":[{"id":"bd86a1c4-c7bb-4c12-8e69-8a69bf92d2b7","type":"GlyphRenderer"}]},"id":"f3c9e19f-b8d7-470e-86ef-fc229561174e","type":"LegendItem"},{"attributes":{},"id":"678f8687-e41d-4530-873d-f0e0c5b2f157","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"}],"series":["python","python","python","python","python","python","python","python","python","python","python","python","python","python"],"x_values":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"y_values":[2,3,7,5,26,221,44,233,254,265,266,267,120,111]}},"id":"68b5d730-eb99-4cc0-a03c-ca429509d7b0","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"d4fc6253-26e3-4688-87fb-9f14c5ae3356","subtype":"Chart","type":"Plot"}},"id":"16a30089-d5ed-4f5e-ba7e-cad19be8ab1f","type":"WheelZoomTool"},{"attributes":{"items":[{"id":"6048cfe6-e9a2-4e96-9de0-29dc88b98024","type":"LegendItem"},{"id":"2e02838e-5337-4a1a-89ee-1e0f42a43d28","type":"LegendItem"},{"id":"f3c9e19f-b8d7-470e-86ef-fc229561174e","type":"LegendItem"}],"location":"top_left","plot":{"id":"d4fc6253-26e3-4688-87fb-9f14c5ae3356","subtype":"Chart","type":"Plot"}},"id":"eb5b8ec6-0eae-49db-afed-a80d77ad3819","type":"Legend"},{"attributes":{"line_color":{"value":"#5ab738"},"line_dash":[6],"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"623a5143-351e-4646-b520-3f173289671f","type":"Line"},{"attributes":{"plot":{"id":"d4fc6253-26e3-4688-87fb-9f14c5ae3356","subtype":"Chart","type":"Plot"}},"id":"d468d7e2-5646-4a75-a30f-c295e2b1fd65","type":"ResetTool"},{"attributes":{"line_color":{"value":"#407ee7"},"line_dash":[2,4],"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"3efac766-13e2-4642-beb2-d773b70f6e84","type":"Line"},{"attributes":{},"id":"f310c8f1-c00f-4413-b04a-c9d31fdd2a0d","type":"BasicTicker"},{"attributes":{},"id":"3ad9684f-d769-4252-a7df-7845f59a6869","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f175d6df-f742-492e-a904-207e31915223","type":"PanTool"},{"id":"16a30089-d5ed-4f5e-ba7e-cad19be8ab1f","type":"WheelZoomTool"},{"id":"76ab27d6-7ec3-4b40-8402-1ec2bc44fc13","type":"BoxZoomTool"},{"id":"9296da1a-57cf-4bcf-b160-0361f053faf6","type":"SaveTool"},{"id":"d468d7e2-5646-4a75-a30f-c295e2b1fd65","type":"ResetTool"},{"id":"22a5c83a-0ef2-4c16-8cf7-2538cba728fc","type":"HelpTool"}]},"id":"657592b6-7621-403b-958b-19d29dcd29f5","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ea3dc1e8-d56d-4516-a4e2-3cac071a8db9","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"d4fc6253-26e3-4688-87fb-9f14c5ae3356","subtype":"Chart","type":"Plot"}},"id":"22a5c83a-0ef2-4c16-8cf7-2538cba728fc","type":"HelpTool"},{"attributes":{"label":{"value":"jython"},"renderers":[{"id":"fe134666-d238-4fac-ac18-1ca5599128ba","type":"GlyphRenderer"}]},"id":"6048cfe6-e9a2-4e96-9de0-29dc88b98024","type":"LegendItem"},{"attributes":{"plot":null,"text":"Interpreter Sample Data"},"id":"d75478df-0e39-419b-91d4-a260f36c1f11","type":"Title"},{"attributes":{"line_color":{"value":"#f22c40"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"b2c55b7d-7ba7-4d54-b5ec-3b89ae83ba2a","type":"Line"}],"root_ids":["d4fc6253-26e3-4688-87fb-9f14c5ae3356"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"1a6fd6c9-97f5-44c6-bf0a-b21e890a7c33","elementid":"1c21652c-7040-4c92-8b8b-02c7a689f813","modelid":"d4fc6253-26e3-4688-87fb-9f14c5ae3356"}];
                
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
