(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("54cfd313-59f3-4e6e-942c-68ff8e4c8015");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '54cfd313-59f3-4e6e-942c-68ff8e4c8015' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"bfa107ad-c108-4d72-91ab-6425444bf47b":{"roots":{"references":[{"attributes":{"below":[{"id":"b89fc624-7426-421d-b432-5d40b71c1888","type":"LinearAxis"}],"left":[{"id":"8336b78a-863b-4112-a5c0-eb638bd5d22b","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"b89fc624-7426-421d-b432-5d40b71c1888","type":"LinearAxis"},{"id":"67a8fc87-088e-4cfc-ac0e-64f620d58315","type":"Grid"},{"id":"8336b78a-863b-4112-a5c0-eb638bd5d22b","type":"LinearAxis"},{"id":"2b32446d-24d4-423b-bdda-c2e71384ec72","type":"Grid"},{"id":"5dc36a00-c316-43b6-9f86-e3a8b4021d71","type":"BoxAnnotation"},{"id":"80d10305-4597-420b-8e66-fdec73dc58ee","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"49ddf829-17b3-48bf-9998-7fa573f5e35a","type":"Toolbar"},"x_range":{"id":"e713ba7e-a389-4d47-a8b4-b5d3afdb5ab0","type":"DataRange1d"},"x_scale":{"id":"50d4152e-464b-426d-aa04-7a1ce2f46e11","type":"LinearScale"},"y_range":{"id":"c7b32c62-040b-476f-97c2-854b829feb4c","type":"DataRange1d"},"y_scale":{"id":"adfa7fa2-96bc-4c03-b90a-338d91d9a855","type":"LinearScale"}},"id":"ddedf55f-adf3-40d4-a0ed-b3766f318eb1","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"79d0e552-87f2-4b5d-8e22-c5f3feba488f","type":"PanTool"},{"id":"0121d0b5-fbd3-416e-b86d-768def15b92c","type":"WheelZoomTool"},{"id":"4a005063-17aa-481d-8a3e-493cc75225d8","type":"BoxZoomTool"},{"id":"7971dd1b-09ba-4de4-b6d7-ccecef063fa2","type":"SaveTool"},{"id":"abfceaa6-0fea-47d9-824a-47aa45239802","type":"ResetTool"},{"id":"f54fc38a-e479-452e-b0ad-417379bb2e6c","type":"HelpTool"}]},"id":"9017e0ac-295e-4951-80d5-6bac395c8f3e","type":"Toolbar"},{"attributes":{},"id":"d0da46dd-8535-48d1-95a2-11f0c18dfb35","type":"LinearScale"},{"attributes":{},"id":"07347baf-bbb8-47b9-b796-f1757d535d20","type":"BasicTickFormatter"},{"attributes":{},"id":"adfa7fa2-96bc-4c03-b90a-338d91d9a855","type":"LinearScale"},{"attributes":{},"id":"807d5061-0a59-41fb-957e-a553aa3e2cab","type":"LinearScale"},{"attributes":{},"id":"b5b4f531-e4ec-457b-a1ee-0387c4857831","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"0bd9fc4f-61fc-4409-a2cf-98d81fb7b3fc","type":"Circle"},{"attributes":{},"id":"f54fc38a-e479-452e-b0ad-417379bb2e6c","type":"HelpTool"},{"attributes":{"children":[{"id":"ddedf55f-adf3-40d4-a0ed-b3766f318eb1","subtype":"Figure","type":"Plot"},{"id":"fbd42160-8e82-4d52-8b4b-10967b7fb558","subtype":"Figure","type":"Plot"},{"id":"e543e44c-8979-4ab4-8b3a-a107968cbc12","subtype":"Figure","type":"Plot"}]},"id":"f03076ec-2055-4416-ad78-cb847cbaf90c","type":"Row"},{"attributes":{},"id":"02106e35-58d6-4f80-ae47-7221a906caf1","type":"LinearScale"},{"attributes":{"callback":null},"id":"73283a08-7481-44c0-b817-85c0f6e9b7a7","type":"DataRange1d"},{"attributes":{},"id":"0f491b1d-d65e-4b85-97c7-bab292706c94","type":"BasicTicker"},{"attributes":{"callback":null},"id":"c7b32c62-040b-476f-97c2-854b829feb4c","type":"DataRange1d"},{"attributes":{"plot":{"id":"ddedf55f-adf3-40d4-a0ed-b3766f318eb1","subtype":"Figure","type":"Plot"},"ticker":{"id":"cd64579a-0462-4edd-bee1-3765feb03b00","type":"BasicTicker"}},"id":"67a8fc87-088e-4cfc-ac0e-64f620d58315","type":"Grid"},{"attributes":{"callback":null},"id":"c94b2595-c5d6-4e42-8ae7-06ce94e78c27","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"ddedf55f-adf3-40d4-a0ed-b3766f318eb1","subtype":"Figure","type":"Plot"},"ticker":{"id":"f1a2ca36-bc87-4c06-92fa-b5bcaa864d64","type":"BasicTicker"}},"id":"2b32446d-24d4-423b-bdda-c2e71384ec72","type":"Grid"},{"attributes":{},"id":"51b731f8-d22a-4cba-bbe5-dee2a37f2ab7","type":"LinearScale"},{"attributes":{"formatter":{"id":"07347baf-bbb8-47b9-b796-f1757d535d20","type":"BasicTickFormatter"},"plot":{"id":"e543e44c-8979-4ab4-8b3a-a107968cbc12","subtype":"Figure","type":"Plot"},"ticker":{"id":"39eb0ddc-e582-4c27-863c-9e1d06121695","type":"BasicTicker"}},"id":"9be384e7-1337-4dca-b7c5-41c6b0f597ef","type":"LinearAxis"},{"attributes":{"callback":null},"id":"e713ba7e-a389-4d47-a8b4-b5d3afdb5ab0","type":"DataRange1d"},{"attributes":{"formatter":{"id":"3c628001-c700-4fd0-a416-b9829115ca30","type":"BasicTickFormatter"},"plot":{"id":"ddedf55f-adf3-40d4-a0ed-b3766f318eb1","subtype":"Figure","type":"Plot"},"ticker":{"id":"cd64579a-0462-4edd-bee1-3765feb03b00","type":"BasicTicker"}},"id":"b89fc624-7426-421d-b432-5d40b71c1888","type":"LinearAxis"},{"attributes":{},"id":"a48b694c-dc72-4f60-bb8c-81271e4a568e","type":"HelpTool"},{"attributes":{"formatter":{"id":"d59d698c-5582-4e4e-8503-20622de330c3","type":"BasicTickFormatter"},"plot":{"id":"e543e44c-8979-4ab4-8b3a-a107968cbc12","subtype":"Figure","type":"Plot"},"ticker":{"id":"fd2b8957-8860-4706-806a-bd2aa7f6e319","type":"BasicTicker"}},"id":"826fe0f4-80ca-4a58-b9c2-32d20d8200ae","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6f7103a8-0c1d-40a4-ae89-1a1c2949e585","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"fbd42160-8e82-4d52-8b4b-10967b7fb558","subtype":"Figure","type":"Plot"},"ticker":{"id":"72d57366-4fd2-4451-87c3-ee226b2b3b20","type":"BasicTicker"}},"id":"5362a100-e106-4ad9-861a-9b35c1162278","type":"Grid"},{"attributes":{"source":{"id":"3cd9d7e5-0a0c-4222-8b2c-ec38ee2ec3ae","type":"ColumnDataSource"}},"id":"c1ff7795-1847-495c-aa16-9d4192e99bf6","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"055b5114-dedc-4512-a70d-3cb728a83a22","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"0587d12f-fa3b-4797-bf52-2db88223db11","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"e543e44c-8979-4ab4-8b3a-a107968cbc12","subtype":"Figure","type":"Plot"},"ticker":{"id":"39eb0ddc-e582-4c27-863c-9e1d06121695","type":"BasicTicker"}},"id":"43371961-9122-41f0-b675-a933377f0495","type":"Grid"},{"attributes":{},"id":"72d57366-4fd2-4451-87c3-ee226b2b3b20","type":"BasicTicker"},{"attributes":{},"id":"8bc6b334-c27d-4cb6-9581-2716ada3446a","type":"SaveTool"},{"attributes":{"formatter":{"id":"c67e911a-0472-44e0-8a75-53a40f9edcb1","type":"BasicTickFormatter"},"plot":{"id":"ddedf55f-adf3-40d4-a0ed-b3766f318eb1","subtype":"Figure","type":"Plot"},"ticker":{"id":"f1a2ca36-bc87-4c06-92fa-b5bcaa864d64","type":"BasicTicker"}},"id":"8336b78a-863b-4112-a5c0-eb638bd5d22b","type":"LinearAxis"},{"attributes":{},"id":"112a2a47-6b87-4df7-90f3-37a97a925288","type":"WheelZoomTool"},{"attributes":{},"id":"f1a2ca36-bc87-4c06-92fa-b5bcaa864d64","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"e543e44c-8979-4ab4-8b3a-a107968cbc12","subtype":"Figure","type":"Plot"},"ticker":{"id":"fd2b8957-8860-4706-806a-bd2aa7f6e319","type":"BasicTicker"}},"id":"2c18b93c-fd3c-4326-8b16-078433f778c0","type":"Grid"},{"attributes":{},"id":"cd64579a-0462-4edd-bee1-3765feb03b00","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5dc36a00-c316-43b6-9f86-e3a8b4021d71","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"f65da582-8544-4745-89c2-90bfe9465e38","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"3cd9d7e5-0a0c-4222-8b2c-ec38ee2ec3ae","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"8b3c4a37-6eb0-44bd-9a4c-52fb0f42aba4","type":"BasicTickFormatter"},"plot":{"id":"fbd42160-8e82-4d52-8b4b-10967b7fb558","subtype":"Figure","type":"Plot"},"ticker":{"id":"72d57366-4fd2-4451-87c3-ee226b2b3b20","type":"BasicTicker"}},"id":"11e63439-6fdd-431e-b176-efbc9ec7e824","type":"LinearAxis"},{"attributes":{"callback":null},"id":"a2854d31-c3ea-43ac-b8ea-692af8a1d316","type":"DataRange1d"},{"attributes":{},"id":"ee9473a1-7d72-448c-ae9e-2c04df6beca7","type":"ResetTool"},{"attributes":{},"id":"50d4152e-464b-426d-aa04-7a1ce2f46e11","type":"LinearScale"},{"attributes":{},"id":"91897f5e-8360-456e-9590-f87243ed62f7","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"055b5114-dedc-4512-a70d-3cb728a83a22","type":"BoxAnnotation"}},"id":"4c5bfef5-f291-4cbd-82d3-ffca6a476160","type":"BoxZoomTool"},{"attributes":{},"id":"c67e911a-0472-44e0-8a75-53a40f9edcb1","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"0587d12f-fa3b-4797-bf52-2db88223db11","type":"ColumnDataSource"},"glyph":{"id":"0bd9fc4f-61fc-4409-a2cf-98d81fb7b3fc","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"98d1a928-ccac-44cb-a95a-da82d9f64f3b","type":"Circle"},"selection_glyph":null,"view":{"id":"c089d849-b9b8-4d81-a27b-3c797cc11701","type":"CDSView"}},"id":"80d10305-4597-420b-8e66-fdec73dc58ee","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"fbd42160-8e82-4d52-8b4b-10967b7fb558","subtype":"Figure","type":"Plot"},"ticker":{"id":"0f491b1d-d65e-4b85-97c7-bab292706c94","type":"BasicTicker"}},"id":"3d116523-fe10-4c88-857d-8bd061039eb6","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b5b4f531-e4ec-457b-a1ee-0387c4857831","type":"PanTool"},{"id":"112a2a47-6b87-4df7-90f3-37a97a925288","type":"WheelZoomTool"},{"id":"4c5bfef5-f291-4cbd-82d3-ffca6a476160","type":"BoxZoomTool"},{"id":"8bc6b334-c27d-4cb6-9581-2716ada3446a","type":"SaveTool"},{"id":"5a1806c6-36d3-4ca9-b1a4-5cbda076d35f","type":"ResetTool"},{"id":"a48b694c-dc72-4f60-bb8c-81271e4a568e","type":"HelpTool"}]},"id":"a89e71cb-53b5-4f25-a0f7-251296b67e76","type":"Toolbar"},{"attributes":{},"id":"6d00d29e-38b5-402f-b790-ce1a3d31d2cc","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3023a130-4c0e-4112-8d3c-e90b7a6702f3","type":"Triangle"},{"attributes":{"data_source":{"id":"3cd9d7e5-0a0c-4222-8b2c-ec38ee2ec3ae","type":"ColumnDataSource"},"glyph":{"id":"fa6d5fe3-29da-496d-9873-43b835be869d","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3023a130-4c0e-4112-8d3c-e90b7a6702f3","type":"Triangle"},"selection_glyph":null,"view":{"id":"c1ff7795-1847-495c-aa16-9d4192e99bf6","type":"CDSView"}},"id":"3edba81f-17c9-4f3f-8517-6b1e2c816e68","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"fa6d5fe3-29da-496d-9873-43b835be869d","type":"Triangle"},{"attributes":{},"id":"3c628001-c700-4fd0-a416-b9829115ca30","type":"BasicTickFormatter"},{"attributes":{},"id":"8b3c4a37-6eb0-44bd-9a4c-52fb0f42aba4","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"9be384e7-1337-4dca-b7c5-41c6b0f597ef","type":"LinearAxis"}],"left":[{"id":"826fe0f4-80ca-4a58-b9c2-32d20d8200ae","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"9be384e7-1337-4dca-b7c5-41c6b0f597ef","type":"LinearAxis"},{"id":"43371961-9122-41f0-b675-a933377f0495","type":"Grid"},{"id":"826fe0f4-80ca-4a58-b9c2-32d20d8200ae","type":"LinearAxis"},{"id":"2c18b93c-fd3c-4326-8b16-078433f778c0","type":"Grid"},{"id":"6f7103a8-0c1d-40a4-ae89-1a1c2949e585","type":"BoxAnnotation"},{"id":"35eb7b24-a334-4e9f-ba6e-ccfc1be05207","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"9017e0ac-295e-4951-80d5-6bac395c8f3e","type":"Toolbar"},"x_range":{"id":"f65da582-8544-4745-89c2-90bfe9465e38","type":"DataRange1d"},"x_scale":{"id":"02106e35-58d6-4f80-ae47-7221a906caf1","type":"LinearScale"},"y_range":{"id":"73283a08-7481-44c0-b817-85c0f6e9b7a7","type":"DataRange1d"},"y_scale":{"id":"d0da46dd-8535-48d1-95a2-11f0c18dfb35","type":"LinearScale"}},"id":"e543e44c-8979-4ab4-8b3a-a107968cbc12","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"5dc36a00-c316-43b6-9f86-e3a8b4021d71","type":"BoxAnnotation"}},"id":"ff328c69-bad3-4ddd-850f-9fdce3a1bf20","type":"BoxZoomTool"},{"attributes":{},"id":"fd2b8957-8860-4706-806a-bd2aa7f6e319","type":"BasicTicker"},{"attributes":{"source":{"id":"0587d12f-fa3b-4797-bf52-2db88223db11","type":"ColumnDataSource"}},"id":"c089d849-b9b8-4d81-a27b-3c797cc11701","type":"CDSView"},{"attributes":{},"id":"0d1247e9-109f-4ad6-ba44-db55e97e1b21","type":"PanTool"},{"attributes":{},"id":"d862977d-cb85-413f-9d37-bebe2a437da9","type":"HelpTool"},{"attributes":{},"id":"a2f44f17-c5a8-46d6-875c-f70cf09dd1b9","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"2168e3ee-c651-4984-b957-ff6f99ad9604","type":"Square"},{"attributes":{},"id":"5a1806c6-36d3-4ca9-b1a4-5cbda076d35f","type":"ResetTool"},{"attributes":{"below":[{"id":"a25070a1-96f6-4e2e-a046-f610514114d5","type":"LinearAxis"}],"left":[{"id":"11e63439-6fdd-431e-b176-efbc9ec7e824","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"a25070a1-96f6-4e2e-a046-f610514114d5","type":"LinearAxis"},{"id":"3d116523-fe10-4c88-857d-8bd061039eb6","type":"Grid"},{"id":"11e63439-6fdd-431e-b176-efbc9ec7e824","type":"LinearAxis"},{"id":"5362a100-e106-4ad9-861a-9b35c1162278","type":"Grid"},{"id":"055b5114-dedc-4512-a70d-3cb728a83a22","type":"BoxAnnotation"},{"id":"3edba81f-17c9-4f3f-8517-6b1e2c816e68","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"a89e71cb-53b5-4f25-a0f7-251296b67e76","type":"Toolbar"},"x_range":{"id":"a2854d31-c3ea-43ac-b8ea-692af8a1d316","type":"DataRange1d"},"x_scale":{"id":"51b731f8-d22a-4cba-bbe5-dee2a37f2ab7","type":"LinearScale"},"y_range":{"id":"c94b2595-c5d6-4e42-8ae7-06ce94e78c27","type":"DataRange1d"},"y_scale":{"id":"807d5061-0a59-41fb-957e-a553aa3e2cab","type":"LinearScale"}},"id":"fbd42160-8e82-4d52-8b4b-10967b7fb558","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"a2f44f17-c5a8-46d6-875c-f70cf09dd1b9","type":"BasicTickFormatter"},"plot":{"id":"fbd42160-8e82-4d52-8b4b-10967b7fb558","subtype":"Figure","type":"Plot"},"ticker":{"id":"0f491b1d-d65e-4b85-97c7-bab292706c94","type":"BasicTicker"}},"id":"a25070a1-96f6-4e2e-a046-f610514114d5","type":"LinearAxis"},{"attributes":{"overlay":{"id":"6f7103a8-0c1d-40a4-ae89-1a1c2949e585","type":"BoxAnnotation"}},"id":"4a005063-17aa-481d-8a3e-493cc75225d8","type":"BoxZoomTool"},{"attributes":{},"id":"39eb0ddc-e582-4c27-863c-9e1d06121695","type":"BasicTicker"},{"attributes":{},"id":"7971dd1b-09ba-4de4-b6d7-ccecef063fa2","type":"SaveTool"},{"attributes":{"data_source":{"id":"bbd45ff7-95f4-4a49-b438-7ce6210e41a0","type":"ColumnDataSource"},"glyph":{"id":"2168e3ee-c651-4984-b957-ff6f99ad9604","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6931a58d-26f8-40df-b135-a90f729b9c1a","type":"Square"},"selection_glyph":null,"view":{"id":"a553a913-c2fa-4d54-b6f0-49ec7913894d","type":"CDSView"}},"id":"35eb7b24-a334-4e9f-ba6e-ccfc1be05207","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"98d1a928-ccac-44cb-a95a-da82d9f64f3b","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0d1247e9-109f-4ad6-ba44-db55e97e1b21","type":"PanTool"},{"id":"91897f5e-8360-456e-9590-f87243ed62f7","type":"WheelZoomTool"},{"id":"ff328c69-bad3-4ddd-850f-9fdce3a1bf20","type":"BoxZoomTool"},{"id":"6d00d29e-38b5-402f-b790-ce1a3d31d2cc","type":"SaveTool"},{"id":"ee9473a1-7d72-448c-ae9e-2c04df6beca7","type":"ResetTool"},{"id":"d862977d-cb85-413f-9d37-bebe2a437da9","type":"HelpTool"}]},"id":"49ddf829-17b3-48bf-9998-7fa573f5e35a","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"6931a58d-26f8-40df-b135-a90f729b9c1a","type":"Square"},{"attributes":{},"id":"d59d698c-5582-4e4e-8503-20622de330c3","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"bbd45ff7-95f4-4a49-b438-7ce6210e41a0","type":"ColumnDataSource"},{"attributes":{"source":{"id":"bbd45ff7-95f4-4a49-b438-7ce6210e41a0","type":"ColumnDataSource"}},"id":"a553a913-c2fa-4d54-b6f0-49ec7913894d","type":"CDSView"},{"attributes":{},"id":"79d0e552-87f2-4b5d-8e22-c5f3feba488f","type":"PanTool"},{"attributes":{},"id":"abfceaa6-0fea-47d9-824a-47aa45239802","type":"ResetTool"},{"attributes":{},"id":"0121d0b5-fbd3-416e-b86d-768def15b92c","type":"WheelZoomTool"}],"root_ids":["f03076ec-2055-4416-ad78-cb847cbaf90c"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"bfa107ad-c108-4d72-91ab-6425444bf47b","elementid":"54cfd313-59f3-4e6e-942c-68ff8e4c8015","modelid":"f03076ec-2055-4416-ad78-cb847cbaf90c"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
