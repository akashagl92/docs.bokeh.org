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
      };var element = document.getElementById("4c623538-f746-49ec-b242-899459f49a95");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4c623538-f746-49ec-b242-899459f49a95' but no matching script tag was found. ")
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
                var docs_json = {"459e86af-bc9c-499e-a222-2f0e872bea67":{"roots":{"references":[{"attributes":{},"id":"ba4e90be-3551-463f-b116-104c90f907fe","type":"ToolEvents"},{"attributes":{"formatter":{"id":"3e02a9cb-6bb2-4715-b71b-b4f5b1686ad1","type":"BasicTickFormatter"},"plot":{"id":"9faa52c6-0c30-4635-bc23-1f2c1beeb771","subtype":"Figure","type":"Plot"},"ticker":{"id":"89fc0ae0-77ca-467c-8783-e826909de28c","type":"BasicTicker"}},"id":"ac93f751-fa38-4a97-937a-3623cb611188","type":"LinearAxis"},{"attributes":{},"id":"d96f6ce1-69c2-4d51-80e7-b1b4492e98b9","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"08a4f53b-979c-49ac-a2a6-6b2729130bc2","type":"ColumnDataSource"},{"attributes":{},"id":"57bb504b-0efc-40ca-9993-031d85ab94f8","type":"BasicTicker"},{"attributes":{"plot":{"id":"f6f137cc-cf51-49e5-adea-b7bf2c4c88ea","subtype":"Figure","type":"Plot"}},"id":"fe567b60-7622-40a0-b3d9-61e2b63ad232","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"cdf523f0-1c05-4aec-910a-33a67ac2c9e1","type":"Square"},{"attributes":{},"id":"b8fa2706-b8cb-4acd-a7ae-8eef14495143","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"d4408b48-2c9a-4d30-812d-f4ed9568d0eb","subtype":"Figure","type":"Plot"}},"id":"c90a761e-5508-4345-a542-e0be01c82d0e","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1375391e-1f64-441c-8994-46f028a64cda","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"d4408b48-2c9a-4d30-812d-f4ed9568d0eb","subtype":"Figure","type":"Plot"},"ticker":{"id":"be6621f2-d0ce-4b9c-b9b0-69f943353447","type":"BasicTicker"}},"id":"c3f7371b-f8b3-481d-9e67-a95455c24eff","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ceb95daf-b23e-43b3-959a-6d48cd958385","type":"PanTool"},{"id":"9757e8c6-e143-4a93-b397-4c5a59aa99f8","type":"WheelZoomTool"},{"id":"d1dab165-2e7a-452b-9340-1aef7f9bb1de","type":"BoxZoomTool"},{"id":"408a6b85-9a00-47d6-911d-9165dd31c1f6","type":"SaveTool"},{"id":"fe567b60-7622-40a0-b3d9-61e2b63ad232","type":"ResetTool"},{"id":"49cf4ce2-8340-4806-8935-b6c129ff6d10","type":"HelpTool"}]},"id":"912bd34c-1d1a-4806-a650-94e9eff0f801","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"12f99ddd-b429-489b-8703-8d3a8ccb2a3e","type":"Square"},{"attributes":{},"id":"be6621f2-d0ce-4b9c-b9b0-69f943353447","type":"BasicTicker"},{"attributes":{"plot":{"id":"9faa52c6-0c30-4635-bc23-1f2c1beeb771","subtype":"Figure","type":"Plot"}},"id":"8eeeefc8-8703-44c9-807a-915c05570b27","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d05d4a14-c237-4563-b5de-9391b199f03a","type":"Triangle"},{"attributes":{"below":[{"id":"fb797e77-0537-4f90-9f9f-be21fda41864","type":"LinearAxis"}],"left":[{"id":"5de3562c-1aae-4554-af2d-9321acf8fc9a","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"fb797e77-0537-4f90-9f9f-be21fda41864","type":"LinearAxis"},{"id":"ec1e60bf-a839-4562-8592-54d4f4fa056a","type":"Grid"},{"id":"5de3562c-1aae-4554-af2d-9321acf8fc9a","type":"LinearAxis"},{"id":"c3f7371b-f8b3-481d-9e67-a95455c24eff","type":"Grid"},{"id":"e5f34ba1-f5a7-475f-bdf2-a3399639e760","type":"BoxAnnotation"},{"id":"d1527282-1d75-4da9-8d41-8a79e7185c2c","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"ba4e90be-3551-463f-b116-104c90f907fe","type":"ToolEvents"},"toolbar":{"id":"dc076f03-d8e4-4ac1-b649-c37354e728c6","type":"Toolbar"},"x_range":{"id":"126e5cb3-c9fd-4658-a6cd-c19a079e3e0a","type":"DataRange1d"},"y_range":{"id":"5bd9863f-dd55-411a-b34e-c8a6e87be88f","type":"DataRange1d"}},"id":"d4408b48-2c9a-4d30-812d-f4ed9568d0eb","subtype":"Figure","type":"Plot"},{"attributes":{"below":[{"id":"b73a5c99-f5b5-4ac4-9f7e-850450686a52","type":"LinearAxis"}],"left":[{"id":"9146ceb4-54be-41e3-8b35-a2dd92a7427e","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"b73a5c99-f5b5-4ac4-9f7e-850450686a52","type":"LinearAxis"},{"id":"b140353b-c58d-47de-a4eb-4d23b19e6e25","type":"Grid"},{"id":"9146ceb4-54be-41e3-8b35-a2dd92a7427e","type":"LinearAxis"},{"id":"ad5cd32a-f553-44b9-80db-771147d65cea","type":"Grid"},{"id":"93dc944f-a901-4dcc-b679-5ce1792b09b8","type":"BoxAnnotation"},{"id":"a7f5f3e7-3cc9-42f9-8fcd-7c5cb239872e","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"c5e04db5-8046-4ab8-9a6e-5918826bcbe0","type":"ToolEvents"},"toolbar":{"id":"912bd34c-1d1a-4806-a650-94e9eff0f801","type":"Toolbar"},"x_range":{"id":"215e8d56-3e01-48a4-b6ad-d688540ec7d3","type":"DataRange1d"},"y_range":{"id":"0827ea4f-96ac-4f06-b9a3-3937a72dddef","type":"DataRange1d"}},"id":"f6f137cc-cf51-49e5-adea-b7bf2c4c88ea","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"0827ea4f-96ac-4f06-b9a3-3937a72dddef","type":"DataRange1d"},{"attributes":{},"id":"57fb17fc-84ce-4af7-b7ac-4c03c3992940","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"d96f6ce1-69c2-4d51-80e7-b1b4492e98b9","type":"BasicTickFormatter"},"plot":{"id":"f6f137cc-cf51-49e5-adea-b7bf2c4c88ea","subtype":"Figure","type":"Plot"},"ticker":{"id":"238be294-cd07-4610-a842-58f37fa78063","type":"BasicTicker"}},"id":"9146ceb4-54be-41e3-8b35-a2dd92a7427e","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e5f34ba1-f5a7-475f-bdf2-a3399639e760","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0b5ba50f-2456-4c16-af98-a8bdd6a0c26b","type":"PanTool"},{"id":"24c3c853-2104-4d66-995b-b06d233ca5ae","type":"WheelZoomTool"},{"id":"d134024a-1dca-42a7-b1e4-2164fbb1ca3c","type":"BoxZoomTool"},{"id":"c90a761e-5508-4345-a542-e0be01c82d0e","type":"SaveTool"},{"id":"75a41d39-04bc-4c1e-841c-0c361ec6052b","type":"ResetTool"},{"id":"01236193-33d9-4f00-a6a4-b66ad39260fe","type":"HelpTool"}]},"id":"dc076f03-d8e4-4ac1-b649-c37354e728c6","type":"Toolbar"},{"attributes":{"plot":{"id":"d4408b48-2c9a-4d30-812d-f4ed9568d0eb","subtype":"Figure","type":"Plot"}},"id":"0b5ba50f-2456-4c16-af98-a8bdd6a0c26b","type":"PanTool"},{"attributes":{},"id":"3891fa42-5edd-4fdc-8244-55c407ecc8e6","type":"BasicTicker"},{"attributes":{"plot":{"id":"9faa52c6-0c30-4635-bc23-1f2c1beeb771","subtype":"Figure","type":"Plot"}},"id":"8cc4bb90-de64-4ec9-8136-b81baec21533","type":"HelpTool"},{"attributes":{"plot":{"id":"f6f137cc-cf51-49e5-adea-b7bf2c4c88ea","subtype":"Figure","type":"Plot"}},"id":"ceb95daf-b23e-43b3-959a-6d48cd958385","type":"PanTool"},{"attributes":{"plot":{"id":"d4408b48-2c9a-4d30-812d-f4ed9568d0eb","subtype":"Figure","type":"Plot"}},"id":"75a41d39-04bc-4c1e-841c-0c361ec6052b","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f1e9c0fc-5e6e-46ab-bd89-8dd197559815","type":"BoxAnnotation"},{"attributes":{},"id":"c18e83cb-595d-4dc4-a818-695699631163","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"d4408b48-2c9a-4d30-812d-f4ed9568d0eb","subtype":"Figure","type":"Plot"}},"id":"01236193-33d9-4f00-a6a4-b66ad39260fe","type":"HelpTool"},{"attributes":{"plot":{"id":"f6f137cc-cf51-49e5-adea-b7bf2c4c88ea","subtype":"Figure","type":"Plot"}},"id":"408a6b85-9a00-47d6-911d-9165dd31c1f6","type":"SaveTool"},{"attributes":{"callback":null},"id":"5bd9863f-dd55-411a-b34e-c8a6e87be88f","type":"DataRange1d"},{"attributes":{"plot":{"id":"f6f137cc-cf51-49e5-adea-b7bf2c4c88ea","subtype":"Figure","type":"Plot"}},"id":"9757e8c6-e143-4a93-b397-4c5a59aa99f8","type":"WheelZoomTool"},{"attributes":{},"id":"89fc0ae0-77ca-467c-8783-e826909de28c","type":"BasicTicker"},{"attributes":{},"id":"5bda5c8e-c397-46dc-8869-a68281595ec3","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"57fb17fc-84ce-4af7-b7ac-4c03c3992940","type":"BasicTickFormatter"},"plot":{"id":"f6f137cc-cf51-49e5-adea-b7bf2c4c88ea","subtype":"Figure","type":"Plot"},"ticker":{"id":"3891fa42-5edd-4fdc-8244-55c407ecc8e6","type":"BasicTicker"}},"id":"b73a5c99-f5b5-4ac4-9f7e-850450686a52","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"cd988462-3924-428e-a877-9ba4c2631e2e","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"f1e9c0fc-5e6e-46ab-bd89-8dd197559815","type":"BoxAnnotation"},"plot":{"id":"9faa52c6-0c30-4635-bc23-1f2c1beeb771","subtype":"Figure","type":"Plot"}},"id":"d2272185-72fb-4867-8e1a-981ea1b092b7","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"126e5cb3-c9fd-4658-a6cd-c19a079e3e0a","type":"DataRange1d"},{"attributes":{"data_source":{"id":"08a4f53b-979c-49ac-a2a6-6b2729130bc2","type":"ColumnDataSource"},"glyph":{"id":"cdf523f0-1c05-4aec-910a-33a67ac2c9e1","type":"Square"},"hover_glyph":null,"nonselection_glyph":{"id":"12f99ddd-b429-489b-8703-8d3a8ccb2a3e","type":"Square"},"selection_glyph":null},"id":"b171f205-da3c-48eb-a9be-b5ca5a087dad","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"93dc944f-a901-4dcc-b679-5ce1792b09b8","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"e6ce01dc-c34b-4846-b892-69f4974d1766","type":"DataRange1d"},{"attributes":{"below":[{"id":"ac93f751-fa38-4a97-937a-3623cb611188","type":"LinearAxis"}],"left":[{"id":"5d97e83d-b1f4-4105-9754-a0f7b77d3946","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"ac93f751-fa38-4a97-937a-3623cb611188","type":"LinearAxis"},{"id":"e47c1426-d2bc-4602-a2be-18d91ca3f560","type":"Grid"},{"id":"5d97e83d-b1f4-4105-9754-a0f7b77d3946","type":"LinearAxis"},{"id":"0a61cf14-aa4e-4f42-894f-4d8308b947d3","type":"Grid"},{"id":"f1e9c0fc-5e6e-46ab-bd89-8dd197559815","type":"BoxAnnotation"},{"id":"b171f205-da3c-48eb-a9be-b5ca5a087dad","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"539b3bd3-90ef-4c91-a22e-a6d74dec4270","type":"ToolEvents"},"toolbar":{"id":"760cb2ee-054f-428a-b817-d469508fd175","type":"Toolbar"},"x_range":{"id":"b5745a8f-63f7-4901-ba76-6ae179fc7bf8","type":"DataRange1d"},"y_range":{"id":"e6ce01dc-c34b-4846-b892-69f4974d1766","type":"DataRange1d"}},"id":"9faa52c6-0c30-4635-bc23-1f2c1beeb771","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"9faa52c6-0c30-4635-bc23-1f2c1beeb771","subtype":"Figure","type":"Plot"},"ticker":{"id":"57bb504b-0efc-40ca-9993-031d85ab94f8","type":"BasicTicker"}},"id":"0a61cf14-aa4e-4f42-894f-4d8308b947d3","type":"Grid"},{"attributes":{"data_source":{"id":"f6b74ddc-7cf8-4a19-8eff-f5f444ec7f0b","type":"ColumnDataSource"},"glyph":{"id":"1375391e-1f64-441c-8994-46f028a64cda","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"2d184784-93d0-4951-8d0d-b10e11465ae6","type":"Circle"},"selection_glyph":null},"id":"d1527282-1d75-4da9-8d41-8a79e7185c2c","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"82e93e4f-dfc5-4d76-804a-545748196022","type":"PanTool"},{"id":"2710a9f8-26bf-4482-90b1-2ae15f30afe2","type":"WheelZoomTool"},{"id":"d2272185-72fb-4867-8e1a-981ea1b092b7","type":"BoxZoomTool"},{"id":"887a64f1-126d-4dcc-8f04-44f6ae2ff7a0","type":"SaveTool"},{"id":"8eeeefc8-8703-44c9-807a-915c05570b27","type":"ResetTool"},{"id":"8cc4bb90-de64-4ec9-8136-b81baec21533","type":"HelpTool"}]},"id":"760cb2ee-054f-428a-b817-d469508fd175","type":"Toolbar"},{"attributes":{},"id":"c5e04db5-8046-4ab8-9a6e-5918826bcbe0","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"2d184784-93d0-4951-8d0d-b10e11465ae6","type":"Circle"},{"attributes":{"callback":null},"id":"b5745a8f-63f7-4901-ba76-6ae179fc7bf8","type":"DataRange1d"},{"attributes":{"callback":null},"id":"215e8d56-3e01-48a4-b6ad-d688540ec7d3","type":"DataRange1d"},{"attributes":{"data_source":{"id":"cd988462-3924-428e-a877-9ba4c2631e2e","type":"ColumnDataSource"},"glyph":{"id":"9cbc8b89-f414-467e-9641-14cbde7b7ae4","type":"Triangle"},"hover_glyph":null,"nonselection_glyph":{"id":"d05d4a14-c237-4563-b5de-9391b199f03a","type":"Triangle"},"selection_glyph":null},"id":"a7f5f3e7-3cc9-42f9-8fcd-7c5cb239872e","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"9cbc8b89-f414-467e-9641-14cbde7b7ae4","type":"Triangle"},{"attributes":{},"id":"df18d41c-ede3-480b-9539-c3703647fd97","type":"BasicTicker"},{"attributes":{"formatter":{"id":"b8fa2706-b8cb-4acd-a7ae-8eef14495143","type":"BasicTickFormatter"},"plot":{"id":"d4408b48-2c9a-4d30-812d-f4ed9568d0eb","subtype":"Figure","type":"Plot"},"ticker":{"id":"be6621f2-d0ce-4b9c-b9b0-69f943353447","type":"BasicTicker"}},"id":"5de3562c-1aae-4554-af2d-9321acf8fc9a","type":"LinearAxis"},{"attributes":{"plot":{"id":"d4408b48-2c9a-4d30-812d-f4ed9568d0eb","subtype":"Figure","type":"Plot"},"ticker":{"id":"df18d41c-ede3-480b-9539-c3703647fd97","type":"BasicTicker"}},"id":"ec1e60bf-a839-4562-8592-54d4f4fa056a","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"f6b74ddc-7cf8-4a19-8eff-f5f444ec7f0b","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"d4408b48-2c9a-4d30-812d-f4ed9568d0eb","subtype":"Figure","type":"Plot"},{"id":"f6f137cc-cf51-49e5-adea-b7bf2c4c88ea","subtype":"Figure","type":"Plot"},{"id":"9faa52c6-0c30-4635-bc23-1f2c1beeb771","subtype":"Figure","type":"Plot"}]},"id":"20024e1a-504c-46aa-9740-02a58e18e273","type":"Row"},{"attributes":{"plot":{"id":"f6f137cc-cf51-49e5-adea-b7bf2c4c88ea","subtype":"Figure","type":"Plot"},"ticker":{"id":"3891fa42-5edd-4fdc-8244-55c407ecc8e6","type":"BasicTicker"}},"id":"b140353b-c58d-47de-a4eb-4d23b19e6e25","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"f6f137cc-cf51-49e5-adea-b7bf2c4c88ea","subtype":"Figure","type":"Plot"},"ticker":{"id":"238be294-cd07-4610-a842-58f37fa78063","type":"BasicTicker"}},"id":"ad5cd32a-f553-44b9-80db-771147d65cea","type":"Grid"},{"attributes":{},"id":"238be294-cd07-4610-a842-58f37fa78063","type":"BasicTicker"},{"attributes":{"plot":{"id":"f6f137cc-cf51-49e5-adea-b7bf2c4c88ea","subtype":"Figure","type":"Plot"}},"id":"49cf4ce2-8340-4806-8935-b6c129ff6d10","type":"HelpTool"},{"attributes":{"plot":{"id":"9faa52c6-0c30-4635-bc23-1f2c1beeb771","subtype":"Figure","type":"Plot"}},"id":"887a64f1-126d-4dcc-8f04-44f6ae2ff7a0","type":"SaveTool"},{"attributes":{"overlay":{"id":"e5f34ba1-f5a7-475f-bdf2-a3399639e760","type":"BoxAnnotation"},"plot":{"id":"d4408b48-2c9a-4d30-812d-f4ed9568d0eb","subtype":"Figure","type":"Plot"}},"id":"d134024a-1dca-42a7-b1e4-2164fbb1ca3c","type":"BoxZoomTool"},{"attributes":{"overlay":{"id":"93dc944f-a901-4dcc-b679-5ce1792b09b8","type":"BoxAnnotation"},"plot":{"id":"f6f137cc-cf51-49e5-adea-b7bf2c4c88ea","subtype":"Figure","type":"Plot"}},"id":"d1dab165-2e7a-452b-9340-1aef7f9bb1de","type":"BoxZoomTool"},{"attributes":{},"id":"3e02a9cb-6bb2-4715-b71b-b4f5b1686ad1","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"c18e83cb-595d-4dc4-a818-695699631163","type":"BasicTickFormatter"},"plot":{"id":"9faa52c6-0c30-4635-bc23-1f2c1beeb771","subtype":"Figure","type":"Plot"},"ticker":{"id":"57bb504b-0efc-40ca-9993-031d85ab94f8","type":"BasicTicker"}},"id":"5d97e83d-b1f4-4105-9754-a0f7b77d3946","type":"LinearAxis"},{"attributes":{"plot":{"id":"d4408b48-2c9a-4d30-812d-f4ed9568d0eb","subtype":"Figure","type":"Plot"}},"id":"24c3c853-2104-4d66-995b-b06d233ca5ae","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"5bda5c8e-c397-46dc-8869-a68281595ec3","type":"BasicTickFormatter"},"plot":{"id":"d4408b48-2c9a-4d30-812d-f4ed9568d0eb","subtype":"Figure","type":"Plot"},"ticker":{"id":"df18d41c-ede3-480b-9539-c3703647fd97","type":"BasicTicker"}},"id":"fb797e77-0537-4f90-9f9f-be21fda41864","type":"LinearAxis"},{"attributes":{"plot":{"id":"9faa52c6-0c30-4635-bc23-1f2c1beeb771","subtype":"Figure","type":"Plot"}},"id":"2710a9f8-26bf-4482-90b1-2ae15f30afe2","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"9faa52c6-0c30-4635-bc23-1f2c1beeb771","subtype":"Figure","type":"Plot"}},"id":"82e93e4f-dfc5-4d76-804a-545748196022","type":"PanTool"},{"attributes":{},"id":"539b3bd3-90ef-4c91-a22e-a6d74dec4270","type":"ToolEvents"},{"attributes":{"plot":{"id":"9faa52c6-0c30-4635-bc23-1f2c1beeb771","subtype":"Figure","type":"Plot"},"ticker":{"id":"89fc0ae0-77ca-467c-8783-e826909de28c","type":"BasicTicker"}},"id":"e47c1426-d2bc-4602-a2be-18d91ca3f560","type":"Grid"}],"root_ids":["20024e1a-504c-46aa-9740-02a58e18e273"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"459e86af-bc9c-499e-a222-2f0e872bea67","elementid":"4c623538-f746-49ec-b242-899459f49a95","modelid":"20024e1a-504c-46aa-9740-02a58e18e273"}];
                
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
