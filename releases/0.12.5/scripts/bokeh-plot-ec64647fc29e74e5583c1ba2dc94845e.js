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
      };var element = document.getElementById("3991fa02-1e85-47c6-9252-1a23208b8302");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3991fa02-1e85-47c6-9252-1a23208b8302' but no matching script tag was found. ")
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
                var docs_json = {"6f72af87-f97c-4837-8796-c218b907b2ad":{"roots":{"references":[{"attributes":{"data_source":{"id":"011f3439-328f-420b-bf7b-11852b263ef2","type":"ColumnDataSource"},"glyph":{"id":"13c20113-d4e3-425f-bf94-d03828d4759a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8aff88e8-22cc-42d1-b80f-f520bedca650","type":"Circle"},"selection_glyph":null},"id":"b2562e65-38f8-495a-955d-a9edf9e63828","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"9c98370c-8a9e-472e-b3b0-aa16cb350a5f","subtype":"Figure","type":"Plot"},"ticker":{"id":"5269a216-7302-41ce-bc13-414e718c95a5","type":"BasicTicker"}},"id":"e71c6e85-98ef-4bea-9d6c-5bd103278367","type":"Grid"},{"attributes":{"formatter":{"id":"4e120784-0698-4bc2-9203-4582118dd862","type":"BasicTickFormatter"},"plot":{"id":"e4a49c7f-bc3c-4655-9fea-a69f2ef3d489","subtype":"Figure","type":"Plot"},"ticker":{"id":"f7da8dca-9bb5-42d1-bac2-1b361277e1b2","type":"BasicTicker"}},"id":"7be12120-f2fe-4415-8151-717014c5b510","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"e4a49c7f-bc3c-4655-9fea-a69f2ef3d489","subtype":"Figure","type":"Plot"},"ticker":{"id":"f7da8dca-9bb5-42d1-bac2-1b361277e1b2","type":"BasicTicker"}},"id":"054b84fc-c84d-4851-97dd-5da510d17574","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"9660c1d8-8cce-48cd-a6c3-5a9c59208032","type":"Circle"},{"attributes":{},"id":"755d953d-1ab2-43aa-ad06-940082105bbd","type":"BasicTickFormatter"},{"attributes":{},"id":"f203059f-77f3-4ee2-9293-72839e413154","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"4c3bc07f-2cef-44f2-8c99-1509b80ef62e","type":"DataRange1d"},{"attributes":{"callback":null},"id":"26639f61-2bae-4160-afbd-22f1ef40f93a","type":"DataRange1d"},{"attributes":{},"id":"5269a216-7302-41ce-bc13-414e718c95a5","type":"BasicTicker"},{"attributes":{"formatter":{"id":"f203059f-77f3-4ee2-9293-72839e413154","type":"BasicTickFormatter"},"plot":{"id":"e4a49c7f-bc3c-4655-9fea-a69f2ef3d489","subtype":"Figure","type":"Plot"},"ticker":{"id":"72c73b80-93fb-449b-99f4-df0e3d70aca6","type":"BasicTicker"}},"id":"d8ad4f6b-389a-4b94-961f-3c9a16f0fadd","type":"LinearAxis"},{"attributes":{"sizing_mode":"scale_width","toolbar_location":"above","tools":[{"id":"78a5aac2-23ad-4c37-b5c8-86924da82e79","type":"BoxSelectTool"},{"id":"51479c1f-5a81-4a07-abff-1a695542d9a1","type":"LassoSelectTool"},{"id":"4ed8b9fd-3b30-424b-8566-26ad32e11ca4","type":"HelpTool"},{"id":"b6c500d4-6788-4c09-9d5e-dc1293c3988e","type":"BoxSelectTool"},{"id":"149d3074-9301-4009-b224-9917591d705b","type":"LassoSelectTool"},{"id":"b3b6ccca-f5f0-46e7-8d0b-3d9346eacc67","type":"HelpTool"}]},"id":"42e9ba76-caf6-4008-a166-c737d9b73d26","type":"ToolbarBox"},{"attributes":{"plot":{"id":"e4a49c7f-bc3c-4655-9fea-a69f2ef3d489","subtype":"Figure","type":"Plot"},"ticker":{"id":"72c73b80-93fb-449b-99f4-df0e3d70aca6","type":"BasicTicker"}},"id":"6e4c9672-b29e-4431-a05f-9b8ffe420992","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"8afcc0c5-724e-4e5e-b9b9-529903f53b54","type":"Circle"},{"attributes":{},"id":"870cb8d7-d4ce-4083-b16e-f3de64d16a4a","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"78a5aac2-23ad-4c37-b5c8-86924da82e79","type":"BoxSelectTool"},{"id":"51479c1f-5a81-4a07-abff-1a695542d9a1","type":"LassoSelectTool"},{"id":"4ed8b9fd-3b30-424b-8566-26ad32e11ca4","type":"HelpTool"}]},"id":"6cd710e1-c78c-4814-a892-f3258243a4ad","type":"Toolbar"},{"attributes":{},"id":"72c73b80-93fb-449b-99f4-df0e3d70aca6","type":"BasicTicker"},{"attributes":{},"id":"4e120784-0698-4bc2-9203-4582118dd862","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"9c98370c-8a9e-472e-b3b0-aa16cb350a5f","subtype":"Figure","type":"Plot"}},"id":"4ed8b9fd-3b30-424b-8566-26ad32e11ca4","type":"HelpTool"},{"attributes":{},"id":"b9a17809-ba6a-47fb-b3ab-56876d1902c5","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b6c500d4-6788-4c09-9d5e-dc1293c3988e","type":"BoxSelectTool"},{"id":"149d3074-9301-4009-b224-9917591d705b","type":"LassoSelectTool"},{"id":"b3b6ccca-f5f0-46e7-8d0b-3d9346eacc67","type":"HelpTool"}]},"id":"83b86933-1b5f-4f0f-8451-7f00606cb2ba","type":"Toolbar"},{"attributes":{},"id":"bd5b2efc-c988-421f-896c-6082856790c6","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"eb53de70-5cbb-49eb-8f1c-299e93bc597f","type":"LinearAxis"}],"left":[{"id":"80c4b6c0-6c70-4305-b1d1-c290fead2d1b","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"eb53de70-5cbb-49eb-8f1c-299e93bc597f","type":"LinearAxis"},{"id":"e71c6e85-98ef-4bea-9d6c-5bd103278367","type":"Grid"},{"id":"80c4b6c0-6c70-4305-b1d1-c290fead2d1b","type":"LinearAxis"},{"id":"a364bbd9-1cab-495d-8575-5dd5753aaf0a","type":"Grid"},{"id":"d09e8846-502e-4109-be1d-ca84d81a5d89","type":"BoxAnnotation"},{"id":"495e2ea8-9512-4bee-a7e7-13eaffe4925c","type":"PolyAnnotation"},{"id":"b2562e65-38f8-495a-955d-a9edf9e63828","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"b9a17809-ba6a-47fb-b3ab-56876d1902c5","type":"ToolEvents"},"toolbar":{"id":"6cd710e1-c78c-4814-a892-f3258243a4ad","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"26639f61-2bae-4160-afbd-22f1ef40f93a","type":"DataRange1d"},"y_range":{"id":"92732830-231d-49fc-bef6-0fd03dd863c3","type":"DataRange1d"}},"id":"9c98370c-8a9e-472e-b3b0-aa16cb350a5f","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"81b89a47-0c65-4dec-8b9e-24f237b3d884","type":"ToolEvents"},{"attributes":{"callback":null,"overlay":{"id":"495e2ea8-9512-4bee-a7e7-13eaffe4925c","type":"PolyAnnotation"},"plot":{"id":"9c98370c-8a9e-472e-b3b0-aa16cb350a5f","subtype":"Figure","type":"Plot"}},"id":"51479c1f-5a81-4a07-abff-1a695542d9a1","type":"LassoSelectTool"},{"attributes":{"callback":null,"overlay":{"id":"845405e3-bfb5-4a2e-9f82-425ecca48c07","type":"PolyAnnotation"},"plot":{"id":"e4a49c7f-bc3c-4655-9fea-a69f2ef3d489","subtype":"Figure","type":"Plot"}},"id":"149d3074-9301-4009-b224-9917591d705b","type":"LassoSelectTool"},{"attributes":{"callback":null,"column_names":["x","y1","y0"],"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]}},"id":"011f3439-328f-420b-bf7b-11852b263ef2","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"011f3439-328f-420b-bf7b-11852b263ef2","type":"ColumnDataSource"},"glyph":{"id":"9660c1d8-8cce-48cd-a6c3-5a9c59208032","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8afcc0c5-724e-4e5e-b9b9-529903f53b54","type":"Circle"},"selection_glyph":null},"id":"ed205070-b55a-4544-b5b2-593cd4696abf","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"5f3f61b2-a678-4c3a-ab6b-2eaee59f9202","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5d87d684-a9fa-4c29-a145-188546c3a455","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"13c20113-d4e3-425f-bf94-d03828d4759a","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"9c98370c-8a9e-472e-b3b0-aa16cb350a5f","subtype":"Figure","type":"Plot"},"ticker":{"id":"870cb8d7-d4ce-4083-b16e-f3de64d16a4a","type":"BasicTicker"}},"id":"a364bbd9-1cab-495d-8575-5dd5753aaf0a","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"8aff88e8-22cc-42d1-b80f-f520bedca650","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"845405e3-bfb5-4a2e-9f82-425ecca48c07","type":"PolyAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"d09e8846-502e-4109-be1d-ca84d81a5d89","type":"BoxAnnotation"},"plot":{"id":"9c98370c-8a9e-472e-b3b0-aa16cb350a5f","subtype":"Figure","type":"Plot"},"renderers":[{"id":"b2562e65-38f8-495a-955d-a9edf9e63828","type":"GlyphRenderer"}]},"id":"78a5aac2-23ad-4c37-b5c8-86924da82e79","type":"BoxSelectTool"},{"attributes":{"children":[{"id":"9c98370c-8a9e-472e-b3b0-aa16cb350a5f","subtype":"Figure","type":"Plot"},{"id":"e4a49c7f-bc3c-4655-9fea-a69f2ef3d489","subtype":"Figure","type":"Plot"}]},"id":"feaf9a8a-be47-4bb1-9e7a-88a8f4921935","type":"Row"},{"attributes":{"formatter":{"id":"bd5b2efc-c988-421f-896c-6082856790c6","type":"BasicTickFormatter"},"plot":{"id":"9c98370c-8a9e-472e-b3b0-aa16cb350a5f","subtype":"Figure","type":"Plot"},"ticker":{"id":"5269a216-7302-41ce-bc13-414e718c95a5","type":"BasicTicker"}},"id":"eb53de70-5cbb-49eb-8f1c-299e93bc597f","type":"LinearAxis"},{"attributes":{"callback":null,"overlay":{"id":"5d87d684-a9fa-4c29-a145-188546c3a455","type":"BoxAnnotation"},"plot":{"id":"e4a49c7f-bc3c-4655-9fea-a69f2ef3d489","subtype":"Figure","type":"Plot"},"renderers":[{"id":"ed205070-b55a-4544-b5b2-593cd4696abf","type":"GlyphRenderer"}]},"id":"b6c500d4-6788-4c09-9d5e-dc1293c3988e","type":"BoxSelectTool"},{"attributes":{"children":[{"id":"42e9ba76-caf6-4008-a166-c737d9b73d26","type":"ToolbarBox"},{"id":"a93744d0-e14e-4103-8e47-1866bfd49162","type":"Column"}]},"id":"fe91fd7c-7c00-4bde-842c-d52ebd8eff0d","type":"Column"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d09e8846-502e-4109-be1d-ca84d81a5d89","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"495e2ea8-9512-4bee-a7e7-13eaffe4925c","type":"PolyAnnotation"},{"attributes":{"below":[{"id":"d8ad4f6b-389a-4b94-961f-3c9a16f0fadd","type":"LinearAxis"}],"left":[{"id":"7be12120-f2fe-4415-8151-717014c5b510","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"d8ad4f6b-389a-4b94-961f-3c9a16f0fadd","type":"LinearAxis"},{"id":"6e4c9672-b29e-4431-a05f-9b8ffe420992","type":"Grid"},{"id":"7be12120-f2fe-4415-8151-717014c5b510","type":"LinearAxis"},{"id":"054b84fc-c84d-4851-97dd-5da510d17574","type":"Grid"},{"id":"5d87d684-a9fa-4c29-a145-188546c3a455","type":"BoxAnnotation"},{"id":"845405e3-bfb5-4a2e-9f82-425ecca48c07","type":"PolyAnnotation"},{"id":"ed205070-b55a-4544-b5b2-593cd4696abf","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"81b89a47-0c65-4dec-8b9e-24f237b3d884","type":"ToolEvents"},"toolbar":{"id":"83b86933-1b5f-4f0f-8451-7f00606cb2ba","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5f3f61b2-a678-4c3a-ab6b-2eaee59f9202","type":"DataRange1d"},"y_range":{"id":"4c3bc07f-2cef-44f2-8c99-1509b80ef62e","type":"DataRange1d"}},"id":"e4a49c7f-bc3c-4655-9fea-a69f2ef3d489","subtype":"Figure","type":"Plot"},{"attributes":{"children":[{"id":"feaf9a8a-be47-4bb1-9e7a-88a8f4921935","type":"Row"}]},"id":"a93744d0-e14e-4103-8e47-1866bfd49162","type":"Column"},{"attributes":{"formatter":{"id":"755d953d-1ab2-43aa-ad06-940082105bbd","type":"BasicTickFormatter"},"plot":{"id":"9c98370c-8a9e-472e-b3b0-aa16cb350a5f","subtype":"Figure","type":"Plot"},"ticker":{"id":"870cb8d7-d4ce-4083-b16e-f3de64d16a4a","type":"BasicTicker"}},"id":"80c4b6c0-6c70-4305-b1d1-c290fead2d1b","type":"LinearAxis"},{"attributes":{"plot":{"id":"e4a49c7f-bc3c-4655-9fea-a69f2ef3d489","subtype":"Figure","type":"Plot"}},"id":"b3b6ccca-f5f0-46e7-8d0b-3d9346eacc67","type":"HelpTool"},{"attributes":{},"id":"f7da8dca-9bb5-42d1-bac2-1b361277e1b2","type":"BasicTicker"},{"attributes":{"callback":null},"id":"92732830-231d-49fc-bef6-0fd03dd863c3","type":"DataRange1d"}],"root_ids":["fe91fd7c-7c00-4bde-842c-d52ebd8eff0d"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"6f72af87-f97c-4837-8796-c218b907b2ad","elementid":"3991fa02-1e85-47c6-9252-1a23208b8302","modelid":"fe91fd7c-7c00-4bde-842c-d52ebd8eff0d"}];
                
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
